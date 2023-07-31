import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faHouse, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Resume from '../../images/resume.pdf'
import './contact.css'

const Contact = () => {
    return (
        <div className="contactPage">
            <h2 className="contactHeader">Contact</h2> 

            <ul className="contactText">
                <p><FontAwesomeIcon className="icons" icon={faPhone} /> (781)799-2641 
                 |   <FontAwesomeIcon className="icons" icon={faHouse} /> Greater Boston Area
                </p> 
                <p><FontAwesomeIcon className="icons" icon={faAt} /> <a className="email" href="mailto:Yinglu2641@gmail.com"><u>Yinglu2641@gmail.com</u>   </a>  
                    |  <FontAwesomeIcon icon={faDownload} /> Resume
                </p>
                <p><FontAwesomeIcon className="icons" icon={faGithubSquare} /><a className="github" href="https://github.com/Yl9464?tab=repositories"><u>GitHub</u> | </a>
                <FontAwesomeIcon className="icons" icon={faLinkedin} /><a className="linkedin" href="www.linkedin.com/in/ying-c-lu"><u>LinkedIn</u></a>
                </p>
                
            </ul>
        </div>
    )
}
export default Contact