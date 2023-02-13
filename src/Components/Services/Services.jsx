import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

function Services() {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container service_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX Services */}

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development */}

                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Content Creation */}
            </div>
        </section>
    )
}

export default Services
