import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'
import Rachel from '../profiles/rachel'
import Monica from '../profiles/monica'
import Phoebe from '../profiles/phoebe'

const FriendsInfo = () => {
    const [friend, setFriend] = useState({})
    const { friendName } = useParams()

    useEffect(() => {
        const fetchFriend = async () => {
            let { data } = await Axios.get(`http://localhost:1341/api/characters/${friendName}`)
            setFriend(data)

        }
        fetchFriend()
    }, [friendName])



    return (

        <div className='InfoPage'>
            <Rachel />
            <Monica /> 
            <Phoebe />
        </div >
   ) 
}

export default FriendsInfo