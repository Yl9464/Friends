import React from "react"
import './friendsList.css'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import DebateList from "../debateList/debateList";

const FriendsList = (props) => {
   const  { friends } = props
  return (
     <div> 
      {friends.map(friend => 
        <Card style={{ width: '18rem' }}>
          <Card.Body> 
            <Card.Title>The one about... </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{friend.name} </Card.Subtitle>
          </Card.Body>
    </Card>
      )}
    </div>
  );
}

export default FriendsList;
