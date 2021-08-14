import React from 'react'
import Post from './Post';
import Sidebar from './Sidebar';
import Statusbar from './Statusbar';
import "../styles/landing.css";

const Landing = () => {
    return (
        <div className="landing">
            <div className="row">
            <div className="column-6">
                <div className="row-status">
                    <Statusbar/>
                </div>
                <div className="row-posts">
                    <Post/>
                </div>
            </div>
            <div className="column-4">
                <Sidebar/>
            </div>
            </div>
        </div>
    )
}

export default Landing;
