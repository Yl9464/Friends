import './App.css';
import Image from 'react-bootstrap/image';
import Mainpage from './components/Mainpage/mainpage';
import Skills from './components/skills/skills';
import Memoji from './images/memoji.png'


function App() {
  return ( 
    <div className='app'>
      <Mainpage />
      <Skills />


    </div>
    );
}

export default App;
