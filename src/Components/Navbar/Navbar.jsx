import React, { useState } from 'react';
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

function Navbar() {
    const [ActiveNav, setActiveNav]=useState('#');
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav("#")} className={ActiveNav==='#'?'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav("#about")} className={ActiveNav==='#about'?'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav("#experience")} className={ActiveNav==='#experience'?'active':''}><BiBook/></a>
            <a href="#services" onClick={()=>setActiveNav("#services")} className={ActiveNav==='#services'?'active':''}><RiServiceLine/></a>
            <a href="#contact" onClick={()=>setActiveNav("#contact")} className={ActiveNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Navbar
