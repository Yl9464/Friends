import React from 'react'
import './App.css'
import Mainpage from './components/mainpage/mainpage';
import Error from './components/error/error'
import FriendsInfo from './components/friendsInfo/friendsInfo';
import DebateInfo from './components/debateInfo/debateInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    <div className ="App" >
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
