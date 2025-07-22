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
      <h1>Select a friend to view their profile</h1>
      {friends.map(friend => 
      <Card className="mb-4">
         <Card.Body > 
       <Card.Title>The one about... {friend.name} </Card.Title>
       <Card.Text>
          Click on links below to see a characters profile and my opinions on their controversial moments
        </Card.Text> 
        <Card.Link href={`/characters/${friend.name}`}>Profile</Card.Link> 
       </Card.Body>
        </Card>
         )}
    </div>
  );
}

export default FriendsList;
