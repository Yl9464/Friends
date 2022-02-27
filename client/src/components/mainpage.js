import React, { useEffect, useState } from 'react'
import FriendsSearch from './friendsSearch/friendsSearch'
import FriendsList from './friendsList/friendsList'
import Axios from 'axios'

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

    const nameFilter= (friend) => friend.trait.toLowerCase().includes(name.toLowerCase())
    return (
        <div className='MainPage'>
            <h1>Friends</h1>
            <FriendsSearch name={name} setName={setName} />
            <FriendsList friends={friends.filter(nameFilter)} />

        </div>
    )

}

export default Mainpage