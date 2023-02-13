import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Year Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit dolorem blanditiis sed assumenda commodi labore recusandae alias? Ex illo dolorem porro rem deleniti, iure fugiat nulla! Temporibus, reprehenderit minus.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About
