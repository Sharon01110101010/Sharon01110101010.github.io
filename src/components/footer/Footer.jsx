import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>SHARON WONG</a>
            
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/juihsuan-sharon-wong/" target="_blank"><BsLinkedin/> </a>
                <a href="http://github.com" target="_blank"><FaGithub/> </a>


            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </div>

        </footer>
    )
}

export default Footer


