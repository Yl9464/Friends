import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  Axios  from 'axios'
import './friendsInfo.css'
import Rachel from '../profiles/rachel'
import Monica from '../profiles/monica'
import Phoebe from '../profiles/phoebe'
import Ross from '../profiles/ross'
import Joey from '../profiles/joey'
import Chandler from '../profiles/chandler'

const FriendsInfo = () => {
    const [friend, setFriend] = useState({})
    const { friendName } = useParams() //extract friend name from url

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
     
  if(friendName ==='Ross Geller'){
         return(<Ross /> )
     } 
       if(friendName ==='Joey Tribbiani'){
         return(<Joey /> )
     } 
       if(friendName ==='Chandler Bing'){
         return(<Chandler /> )
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