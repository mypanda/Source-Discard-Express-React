import React from 'react'
import { styled } from '@mui/system'
import PendingInvitationsListItem from './PendingInvitationsListItem'

const DUMMY_INVITATION = [
  {
    _id: '1',
    senderId: {
      username: 'Mark',
      mail: 'dummy@ad.com'
    }
  },
  {
    _id: '2',
    senderId: {
      username: 'John',
      mail: 'dummy@ad.com'
    }
  }
]
const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto'
})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((invitaion) => (
      <PendingInvitationsListItem
        key={invitaion._id}
        id={invitaion._id}
        username={invitaion.senderId.username}
        mail={invitaion.senderId.mail} />
    ))}
    </MainContainer>
  )
}

export default PendingInvitationsList