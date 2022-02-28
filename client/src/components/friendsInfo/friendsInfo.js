import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'

const FriendsInfo = () => {
    const [friend, setFriend] = useState({})
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
            <h1 className='InfoPageTitle'><u>Friends Info</u></h1>
            <h2 className='FriendName'>{friend.name}: </h2>
            <h3 className='Role'> Role in the series: {friend.characterGroup}</h3>
            <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
            </div >
   ) 
}

export default FriendsInfo