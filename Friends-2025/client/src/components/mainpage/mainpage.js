import React, { useEffect, useState } from 'react'
import FriendsList from '../friendsList/friendsList'
import DebateList from '../debateList/debateList'
import './mainpage.css'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'


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
        <Container className='p-5'>
        <Row>
            <Col>
            <FriendsList
            friends={friends.filter(friendFilter)}
            />
            </Col>
            </Row>
            <Row>
              <Col >
             <DebateList
                debates={topics.filter(debateFilter)}      />
            </Col>   
            </Row>
        </Container>
       
        {/* <div className='DebateListings'>
            <DebateList
            debates={topics.filter(debateFilter)}
                />
            </div> */}
     
        </div>
    );

}

export default Mainpage