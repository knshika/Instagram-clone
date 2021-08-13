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
                <div className="insta-log">
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className="search">
                    <input type="text" />
                </div>
                <div className="">
              <AiFillHome  className="nav-icon" />
              <RiMessengerLine  className="nav-icon" />
              <MdExplore  className="nav-icon" />
                <AiOutlineHeart  className="nav-icon" />
                <FaUserCircle  className="nav-icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
