import React, { useEffect } from 'react'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput'
import {styled} from '@mui/system'

const Wrapper = styled('div')({
  flexGrow: 1
})

const MessengerContent = ({chosenChatDetails}) => {
  useEffect(() => {
    // TODO
    // fetching chat history from specific user id
  }, [chosenChatDetails])
  
  return <Wrapper>
    <Messages />
    <NewMessageInput />
  </Wrapper>
}

export default MessengerContent