import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Axios from "axios";
import './debateInfo.css'

const DebateInfo = () => {
    const [debate, setDebate] = useState({})
    const { debateTopic } = useParams()

    useEffect(() => {
        const fetchTopic = async () => {
            let {topicData} = await Axios.get(`http://localhost:1341/api/debate/${debateTopic}`)
        
            setDebate(topicData)
        }
        fetchTopic()
    }, [debateTopic])
    return (
        <div className="DebatePage">
            <h1> Debate Opinions</h1>
            <h2>{debate.topic}</h2>
            <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
        </div>
       
    )
}
export default DebateInfo