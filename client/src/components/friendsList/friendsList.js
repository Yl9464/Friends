import React from "react"
import './friendsList.css'
//import { NavLink } from 'react-router-dom'

const FriendsList = (props) => {
   const  { friends } = props
  return (
    <ul className='FriendsList'>
      {friends.map(friend => <li key={friend.name}>{friend.name}</li>)}
      </ul>
  )
};

export default FriendsList;
