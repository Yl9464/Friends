import './App.css';
import Mainpage from './components/mainpage';
import Error from './components/error/error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FriendsInfo from './friendsInfo/friendsInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters/:name" element={<FriendsInfo />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
