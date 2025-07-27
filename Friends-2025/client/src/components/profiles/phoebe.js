import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import  Axios  from 'axios'
import React, { useState, useEffect } from 'react'
import "./phoebe.css"
import PhoebeImg from '../../images/phoebe.jpg'

const Phoebe = () =>{
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
                <Image className='phoeImg' src={PhoebeImg} roundedCircle/>
                <h2> Phoebe Buffay</h2>
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
export default Phoebe