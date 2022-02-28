import React, { useEffect, useState } from 'react'
import FriendsSearch from './friendsSearch/friendsSearch'
import FriendsList from './friendsList/friendsList'
import Axios from 'axios'
//import FriendsInfo from '../friendsInfo/friendsInfo'

const Mainpage = () => {
    const [name, setName] = useState('')
    const [friends, setFriends] = useState([])
   
    
    useEffect(() => {
        const fetchFriend = async () => {
            let fetchedFriend = await Axios.get('http://localhost:1341/api/characters')
            
            setFriends(fetchedFriend.data)
        }
        fetchFriend()
    }, []);
    const friendFilter = (friend) => friend.name.toUpperCase().includes(name.toUpperCase()) 
    //useEffect(() => {
    //    setFilteredFriends(friends.filter((friend) => friend.name.toUpperCase().includes(name.toUpperCase())))
    //}, [name, friends])

   //const nameFilter= (friend) => friend.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div className="MainPage">
        <h1>Friends</h1>
        <FriendsSearch
            name={name}
            setName={setName}
           />
        <FriendsList
        friends={friends.filter(friendFilter)}
         />
 
      </div>
    );

}

export default Mainpage