import React from "react"
import './friendsList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, CardLink, CardBody, CardTitle, Card, Container } from 'react-bootstrap'

const FriendsList = (props) => {
   const  { friends } = props
   
  return (
    <Container className="px-lg-5">
        <Row className="gx-lg-5 pt-3">
          {friends.map(friend => 
          <Col className="FriendCard">
            <Card className="m-3" style={{ width: '10rem' }}> 
            <CardBody>
              <CardTitle tag="h5">{friend.name} </CardTitle>
              <CardLink href={`/characters/${friend.name}`}>Profile</CardLink> 
            </CardBody>
          </Card>
          
          </Col>
          )}
        </Row>
      </Container>
  );
}

export default FriendsList;
