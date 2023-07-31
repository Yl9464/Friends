import React from 'react'
import './mainpage.css'
import About from '../aboutMe/aboutMe'
import Contact from '../contact/contact'
import Name from '../Name/name'
import Image from 'react-bootstrap/image';
import Memoji from '../../images/memoji.png'


const Mainpage = () => {
    return (
      <div className='mainpage'>
        <Name />
        <About />
        <Image className='myimg' src={Memoji} />
        <Contact />
    
      </div>
)}

export default Mainpage
