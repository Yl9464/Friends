import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faNodeJs, faPython, faGit, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import './skills.css'

const Skills = () => {
    return (
        <div className="skills">
                <FontAwesomeIcon className='skillsIcon' icon={faJs} />
                <FontAwesomeIcon className='skillsIcon' icon={faPython} />
                <FontAwesomeIcon className='skillsIcon' icon={faReact} />
                <FontAwesomeIcon className='skillsIcon' icon={faNodeJs} />
                <FontAwesomeIcon className='skillsIcon' icon={faHtml5} />
                <FontAwesomeIcon className='skillsIcon' icon={faCss3Alt} />
                <FontAwesomeIcon className='skillsIcon' icon={faGithubSquare} /> 
                <FontAwesomeIcon className='skillsIcon' icon={faGit} />
        </div>

    )
}
export default Skills

// JavaScript | React.js | HTML5 | MySQL | Node.js| CSS
// Python | Postman |Django | Git | MongoDB | GitHub