import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'
import Rachel from '../profiles/rachel'
import Monica from '../profiles/monica'
import Phoebe from '../profiles/phoebe'
import Mainpage from '../mainpage/mainpage'

const FriendsInfo = () => {
    const [friend, setFriend] = useState({})
    const [page, setPage] = useState()
    const { friendName } = useParams()

    useEffect(() => {
        const fetchFriend = async () => {
            let { data } = await Axios.get(`http://localhost:1341/api/characters/${friendName}`)
            setFriend(data)
        }
        fetchFriend()
    }, [friendName])

  if(friendName ==='Rachel Green'){
         return(<Rachel /> )
     }       
       if(friendName ==='Monica Geller'){
         return(<Monica /> )
     }   if(friendName ==='Phoebe Buffay'){
         return(<Phoebe /> )
     } 
     


   
}

export default FriendsInfo

// Monica Geller
// Ross Geller
// Phoebe Buffay
// Chandler Bing
// Joey Tribbiani
// Janice Hosenstein
// Mike Hanagan
// Gunther
// Ursala Buffay