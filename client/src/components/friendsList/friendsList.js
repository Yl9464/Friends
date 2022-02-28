import React from "react"
import './friendsList.css'
import { NavLink } from 'react-router-dom'

const FriendsList = (props) => {
   const  { friends } = props
  return (
    <div> 
    <h2>Select A Friend to find out information about them:</h2>
    <ul className="FriendsList">
      {friends.map(friend => <li name='FriendBullets' key={friend.name}><NavLink name='NameList' to={`/characters/${friend.name}`}>{friend.name}</NavLink></li>)}
      </ul>
    </div>
  )
};

export default FriendsList;
