import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'

const FriendsInfo = () => {
    const [friend, setFriend] = useState({})
    const [traits, setTraits] = useState([])
    const {friendName} = useParams()

    useEffect(() => {
        const fetchFriend = async () => {
            let { data } = await Axios.get(`http://localhost:1341/api/characters/${friendName}`)
            setFriend(data)
        }
        fetchFriend()
    }, [friendName])

    return (
        <div className='InfoPage'>
            <h1 className='InfoHeader'><u>Friends Info</u></h1>
            <div className='InfoBody'>
            <h3> <u>Meet Friend</u>... {friend.name}! </h3>
            <h3> <u>Role in Series</u>: {friend.characterGroup}</h3>
            <h3> <u> This Friend Tends To Be</u>...</h3>
            </div>
           
            <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
            </div >
   ) 
}

export default FriendsInfo