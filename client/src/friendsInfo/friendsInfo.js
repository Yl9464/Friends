import React, { useState, useEffect } from 'react'
//import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'

const FriendsInfo = (props) => {
    const [friend, setFriend] = useState({})
    //const {friendName} = useParams()

    useEffect(() => {
        const fetchFriend = async () => {
            let { data } = await Axios.get(`http://localhost:1341/api/characters`)
            setFriend(data)
        }
        fetchFriend()
    }, [])
    return (
        <div className='InfoPage'>
            <h1>Friends Info</h1>
            <h2>Information about the friends</h2>
            <h3>Name: {friend.name}</h3>
            <br />
            <h3>Traits: {friend.trait}</h3>
            <br />
            <h3> Role in the seruies: {friend.characterGroup}</h3>
            </div >
   ) 
}

export default FriendsInfo