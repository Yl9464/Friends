import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image,CardLink, CardBody, CardTitle, Card, Container } from 'react-bootstrap'
import RachelImg from "../images/rachel.jpg"
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import React, { useState, useEffect } from 'react'
import "./rachel.css"
const Rachel = () =>{
    const [friend, setFriend] = useState({})
    const { friendName } = useParams()

    useEffect(() => {
        const fetchFriend = async () => {
            let { data } = await Axios.get(`http://localhost:1341/api/characters/${friendName}`)
            setFriend(data)

        }
        fetchFriend()
    }, [friendName])

    return(
        <Container>
            <Row>
                <Col>
                <Image className='rachImg' src={RachelImg} roundedCircle/>
                <h2> Rachel Green</h2>
                </Col>
                <Col>
                <h1>Best Quote: "{friend.bestQuote}" </h1> 
                </Col>
            </Row>
            <Row>
               <h4> {friend.friendDescription}</h4>
                </Row> 
             <Row>
      <NavLink className='back' to='/'>PIVIOT!</NavLink>
      
             </Row>
         </Container>
    )
}
export default Rachel