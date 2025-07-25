import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './friendsList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, CardLink, CardBody, CardTitle, Card, Container } from 'react-bootstrap'

const FriendsList = (props) => {
   const  { friends } = props

  const [page, setPage] = useState('mainpage') 

  const handleClick = (friend) =>{
    setPage(friend)
  }

  return (
    <Container className="px-lg-5">
        <Row className="gx-lg-5 pt-3">
          {friends.map(friend => 
          <Col className="FriendCard">
            <Card className="m-3" style={{ width: '10rem' }}> 
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
