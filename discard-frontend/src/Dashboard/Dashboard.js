import React from 'react'
import {styled} from '@mui/system'
import SideBar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Message from './Message/Message'
import AppBar from './AppBar/AppBar'

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})

const Dashboard = () => {
  return <Wrapper>
    <SideBar></SideBar>
    <FriendsSideBar></FriendsSideBar>
    <Message></Message>
    <AppBar></AppBar>
  </Wrapper>
}

export default Dashboard