import React from 'react'
import "../styles/navbar.css";
import { AiFillHome,AiOutlineHeart } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import {MdExplore} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navs">
                <div className="insta-logo">
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder="search "/>
                </div>
                <ul className="nav-icons">
                    <li >
                       <AiFillHome  className="nav-icon"/>
                    </li>
                    <li >
                       <RiMessengerLine className="nav-icon"/>
                    </li>
                    <li >
                       <MdExplore className="nav-icon"/>
                    </li>
                    <li >
                       <AiOutlineHeart className="nav-icon"/>
                    </li>
                    <li >
                       <FaUserCircle  className="nav-icon"/>
                    </li>
              
                </ul>
            </div>
        </div>
    )
}

export default Navbar
