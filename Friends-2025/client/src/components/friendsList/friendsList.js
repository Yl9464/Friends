import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './friendsList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, CardLink, CardBody, CardImg, CardTitle, Card, Container } from 'react-bootstrap'
import rachel from '../images/rachel.jpg'
import monica from '../images/monica.jpg'
import phoebe from '../images/phoebe.jpg'
import ross from '../images/ross.jpg'
import joey from '../images/joey.jpg'
import chandler from '../images/chandler.jpg'
import frame from '../images/frame.jpg'

const FriendsList = (props) => {
  const  { friends } = props //array of friends
  const [page, setPage] = useState('mainpage') 
  const [img, setImg] = useState('') 

  const handleClick = (friend) =>{
      console.log(friend);
    setPage(friend)
  }

  //useState: declare a default state variable and a function to update that variable,
//useEffect: fetch data in components

  return (
    <Container className="px-lg-5">
        <Row className="gx-lg-5 pt-3">
         {/* acesses elements for each friend in arrayy */}
          {friends.map(friend => 
          <Col className="FriendCard">
      
            <Card className="m-3" style={{ width: '10rem' }}> 
         {/* {console.log("../images/" + friend.name.split(' ')[0].toLowerCase() + ".jpg")}  */}
            <CardImg src={"../images/" + friend.name.split(' ')[0].toLowerCase() + ".jpg"} />
            <CardBody>
              <CardTitle tag="h5">{friend.name} </CardTitle>
              <CardLink href={`/characters/${friend.name}`} onClick={() => (handleClick(page)) }>Profile</CardLink> 
            </CardBody>
          </Card>
          
          </Col>
          )}
        </Row>
      </Container>
  );
}

export default FriendsList;
