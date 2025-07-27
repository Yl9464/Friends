import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import React, { useState, useEffect } from 'react'
import "./chandler.css"
import chandler from '../../images/chandler.jpg'

const Chandler = () =>{
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
                <Image className='phoeImg' src={chandler} roundedCircle/>
                <h2> Chandler Bing</h2>
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
export default Chandler