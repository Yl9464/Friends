import React from "react";
import { NavLink } from 'react-router-dom'
import './debateList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Card } from 'react-bootstrap'
//import DebateList from "../debateList/debateList";

const DebateList = (props) => {
    const { debates } = props
    return ( 
      <div> 
      <h1 className="DebateHead">Lets Debate</h1>
        {debates.map(debate =>
            <Card border="black" className="mb-4 p-0">
            <Card.Body>
            <Card.Title>Click on topic to see my take on show controverses </Card.Title>
            <Card.Link href={`/debates/${debate.topic}`}>{debate.topic}</Card.Link> 
    
       </Card.Body>
        </Card>
         )}
    </div>
    )
}

export default DebateList