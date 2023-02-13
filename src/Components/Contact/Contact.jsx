import React from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_95vw23t', 'template_z0v9nju', form.current, '8dm3SJIBvf2uEKFfz')
            .then((result) => {
                // console.log(result.text);
                e.target.reset();
                alert("Message Sent Successfully")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>patidarsharad01@gmail.com</h5>
                        <a href="mailto:patidarsharad01@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Sharad Patidar</h5>
                        <a href="https://m.me/sharadpatidar_" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 8602607172</h5>
                        <a href="https://wa.me/+918602607172" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email Address' required />
                    <input type="tel" name='phone' placeholder='Your Phone Number' required />
                    <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                </form>
            </div>

        </section>
    )
}

export default Contact
