import store from "../store/store";
import { setLocalStream } from "../store/actions/roomActions";
import Peer from "simple-peer";
import * as socketConnection from "../realtimeCommunication/socketConnection";
const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO use TURN server credentials
  } else {
    console.warn("Using only STUN server");
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

const onlyAudioConstrants = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  video: true,
  audio: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstrants : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log("Cannot get an access to local stream");
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSockedId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log("preparing new peer connection as initiator");
  } else {
    console.log("preparing new peer connection as not initiator");
  }

  peers[connUserSockedId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connUserSockedId].on("signal", (data) => {
    const signalDate = {
      signal: data,
      connUserSockedId: connUserSockedId,
    };

    // TODO
    // pass signaling data to other user
    // socketConnection.signalPeerData(signalData)

    socketConnection.signalPeerData(signalDate);
  });

  peers[connUserSockedId].on("stream", (remoteStream) => {
    // TODO
    // add new remore stream to our server store
    console.log("remote stream came from other user");
    console.log("direct connection has been established");
  });
};

export const handleSignalingData = (data) => {
  const { connUserSockedId, signal } = data;

  if (peers[connUserSockedId]) {
    peers[connUserSockedId].signal(signal);
  }
};
