import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'
import Rachel from '../profiles/rachel'


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
            {/* <h1 className='InfoHeader'><u>Friends Info</u></h1>
            <div className='InfoBody'>
                <h3> <u>Meet Friend</u>... {friend.name}! </h3>
                <h3> <u>Best Line</u>: "{friend.bestQuote}"</h3>
                <h3 className='FriendOverview'> <u>Overview of Friend</u>: {friend.friendDescription}</h3>
            </div>
           
            <div className='Footer'>
            <NavLink name='Back' to='/'>PIVIOT!</NavLink> */}
        </div >
   ) 
}

export default FriendsInfo