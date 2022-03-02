import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Axios from "axios";
import './debateInfo.css'

const DebateInfo = () => {
    const [debate, setDebate] = useState({})
    const { debateTopic } = useParams();

    useEffect(() => {
        const fetchTopic = async () => {
            let {data} = await Axios.get(`http://localhost:1341/api/debate/${debateTopic}`)
        
            setDebate(data)
        }
        fetchTopic()
    }, [debateTopic])
    return (
        <div className="DebatePage">
            <h1 className="Header"> <u>Debate</u> <u>Opinion</u></h1>
            <h2 className="Topic">{debate.topic}</h2>
            <div className="DebateBody"> 
                <h2 className="Opinion"> <u>Yes or No</u> - {debate.opinion}</h2>
                <h2> <u>The Reason:</u> {debate.reason} </h2>
            </div>
            <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
        </div>
       
    )
}
export default DebateInfo