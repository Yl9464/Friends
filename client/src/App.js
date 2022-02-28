import React from 'react'
import Mainpage from './components/mainpage/mainpage';
import Error from './components/error/error'
import FriendsInfo from './components/friendsInfo/friendsInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/characters/:friendName" element={<FriendsInfo />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
