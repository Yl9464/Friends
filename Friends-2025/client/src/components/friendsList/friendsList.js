import React from "react"
import './friendsList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, CardLink, CardBody, CardTitle, Card, Container } from 'react-bootstrap'
import friendsImg from "../images/friendsImg.jpg"

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

//       <CardGroup className="bg-light border-0 h-100">
      // <CardBody className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
      //     {/* character card */}
     
      //     <CardTitle tag="h5">{friend.name} </CardTitle>
      //        <CardSubtitle
      //   className="mx-auto p-3 text-muted"
      //   tag="h6"
      // >
      //   <CardLink href={`/characters/${friend.name}`}>Profile</CardLink> 
    
      // </CardSubtitle>
      //   </CardBody>
      //  </CardGroup>