import React from "react"
import './friendsList.css'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DebateList from "../debateList/debateList";

const FriendsList = (props) => {
   const  { friends } = props
  return (
     <div> 
      <h1 className="FriendList">View character profile</h1>
      {friends.map(friend => 
      <Card border="black" className="mb-4">
         <Card.Body > 
       <Card.Title>{friend.name} </Card.Title>
        <Card.Link href={`/characters/${friend.name}`}>Profile</Card.Link> 
       </Card.Body>
        </Card>
         )}
    </div>
  );
}

export default FriendsList;
