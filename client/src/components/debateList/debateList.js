import React from "react";
import { NavLink } from 'react-router-dom'
import './debateList.css'

const DebateList = (props) => {
    const { debates } = props
    
    return ( 
        <div> 
        <h1>Selecte a Debatable Topic for my opion:</h1>
        <ul className='TopicList'>
            {debates.map(debate => <li name='TopicBullets' key={debate.topic}><NavLink name='TopicList' to={`/debates/${debate.topic}`}>{debate.topic}</NavLink></li> )}
        </ul>
            </div>
    )
}

export default DebateList