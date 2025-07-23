import React, { useEffect, useState } from 'react'
import FriendsList from '../friendsList/friendsList'
import DebateList from '../debateList/debateList'
import './mainpage.css'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header.js'
import { Container, CardGroup, CardLink, CardImg, CardBody, CardTitle, CardSubtitle, Card } from 'react-bootstrap'

const Mainpage = () => {
    const [name] = useState('')
    const [friends, setFriends] = useState([])
    const [topic] = useState('')
    const [topics, setTopics] = useState([])


    useEffect(() => {
        const fetchFriend = async () => {
            let fetchedFriend = await Axios.get('http://localhost:1341/api/characters')
            
            setFriends(fetchedFriend.data)
            
        }
        fetchFriend()
    }, []);
 
    useEffect(() => {
        const fetchTopic = async () => {
            let fetchedTopic = await Axios.get('http://localhost:1341/api/debate')
            
            setTopics(fetchedTopic.data)
        }
        fetchTopic()
    }, [])
    

    const friendFilter = (friend) => friend.name.toUpperCase().includes(name.toUpperCase()) 
    const debateFilter = (debate) => debate.topic.toUpperCase().includes(topic.toUpperCase())
    
    return (
      <div className="MainPage">
        <Header />
       <FriendsList friends={friends.filter(friendFilter)} />
        </div>
    );

}

export default Mainpage