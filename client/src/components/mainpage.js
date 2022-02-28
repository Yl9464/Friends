import React, { useEffect, useState } from 'react'
import FriendsSearch from './friendsSearch/friendsSearch'
import FriendsList from './friendsList/friendsList'
import Axios from 'axios'
//import FriendsInfo from '../friendsInfo/friendsInfo'

const Mainpage = () => {
    const [name, setName] = useState('')
    const [friends, setFriends] = useState([])
    const [filteredFriends, setFilteredFriends] = useState([])
    
    useEffect(() => {
        const fetchFriend = async () => {
            let fetchedFriend = await Axios.get('http://localhost:1341/api/characters')
            
            setFriends(fetchedFriend.data)
        }
        fetchFriend()
    }, []);

    useEffect(() => {
        setFilteredFriends(friends.filter((friend) => friend.name.toUpperCase().includes(name.toUpperCase())))
    }, [name, friends])

   //const nameFilter= (friend) => friend.name.toLowerCase().includes(name.toLowerCase())
    return (
        <div className='MainPage'>
            <h1>Friends</h1>
            <input type='text' onChange={(event) => setName(event.target.value)} />
            <div>{filteredFriends.map(friend => {
                return (
                    <div>
                        <h2> {friend.name}</h2>
                    </div>
                )
            })
            }
            </div>

        </div>
    )

}

export default Mainpage