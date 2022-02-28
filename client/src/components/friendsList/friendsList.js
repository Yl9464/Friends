import React from "react"
import './friendsList.css'
//import { NavLink } from 'react-router-dom'

const FriendsList = (props) => {
   const  { friends } = props
  return (
    <div>
      <h2>{friends.map(friend => {
      return (
        <h3>{friend.name}</h3>
        )
      })
      }</h2>
    </div>
  )
};

export default FriendsList;
