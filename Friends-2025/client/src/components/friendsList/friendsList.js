import React from "react"
import './friendsList.css'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FriendsList = (props) => {
   const  { friends } = props
  return (
    <div> 
    <h2>Select A Friend to find out information about them:</h2>
    <ul className="FriendsList"> 
      <Card style={{ width: '18rem' }}>
        {friends.map(friend =>
        //add img later  <Card.Img variant="top" src="holder.js/100px180" />
        
        <Card.Body>
          {/* list of friends names non-links */}
          <Card.Title><li name='FriendBullets' key={friend.name}/></Card.Title>
          
          <Card.Text> Click on name </Card.Text>
         <Button variant="primary">
          {/* names as links */}
               <NavLink name='NameList' to={`/characters/${friend.name}`}>{friend.name}</NavLink> 
         </Button>
         </Card.Body>

        )}
      </Card>
      </ul>
    </div>
  )
};

export default FriendsList;
