import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'
const FriendsInfo = (props) => {
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
            <h2>Information about <u>{friend.name}</u> </h2>
            <h3> Role in the series: {friend.characterGroup}</h3>
            <NavLink name='piviot' to='/'>PIVIOT!</NavLink>
            </div >
   ) 
}

export default FriendsInfo