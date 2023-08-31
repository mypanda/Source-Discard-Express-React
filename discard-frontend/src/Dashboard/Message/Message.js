import React from 'react'
import {styled} from '@mui/system'

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display:'flex'
})

const Message = () => {
  return (
    <MainContainer></MainContainer>
  )
}

export default Message