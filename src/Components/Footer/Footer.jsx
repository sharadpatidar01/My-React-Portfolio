import React from 'react';
import './Footer.css';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

function Footer() {
    return (
        <section id='footer'>
            <footer>
                <a href="/#" className='footer_logo'>Sharad Patidar</a>
                <ul className="permalinks">
                    <li><a href="/#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_socials">
                    <a href="https://linkedin.com/in/sharadpatidar" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                    <a href="https://github.com/sharadpatidar01" target="_blank" rel="noreferrer" ><AiFillGithub/></a>
                    <a href="https://www.instagram.com/sharadpatidar_" target="_blank" rel="noreferrer" ><FaInstagramSquare/></a>
                </div>

                <div className="footer_copyright">
                    <small>&copy; Sharad Patidar. All rights reserved.</small>
                </div>
            </footer>
        </section>
    )
}

export default Footer
