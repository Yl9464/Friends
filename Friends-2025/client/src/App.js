import React from 'react'
import './App.css'
import Mainpage from './components/mainpage/mainpage';
import Error from './components/error/error'
import FriendsInfo from './components/friendsInfo/friendsInfo';
import DebateInfo from './components/debateInfo/debateInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'


function App() {
  return (
    
    <div className ="App">
      {/* <header className='App-header'>
        <Card variant="flat" border="header" className='mb-5' style={{color: "khaki"}}>
        <Card.Body>
          <Card.Title>Hello</Card.Title>
          <Card.Text>Friends app coming soon...</Card.Text>
        </Card.Body>
      </Card>

      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/characters/:friendName" element={<FriendsInfo />} />
          <Route path="/debates/:debateTopic" element={<DebateInfo />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter> 
      </div>
  )
}

export default App
