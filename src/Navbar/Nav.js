import React from 'react'
import "./Nav.css"
import { NavLink } from "react-router-dom"
function Nav() {

    return (
        <>
            <div className="mobile_nav">
                <ul>
                    <li><i className="fas fa-solid fa-bars utility"></i></li>
                    <li><h2>Young Minds</h2></li>
                </ul>
                <div className="log_in">
                    <i className="fas fa-solid fa-user utility"></i>
                </div>
            </div>
            <div className="mobileRouting">
                <ul className="mobileNav">
                <li><NavLink to="/" activelassname='active'><i className="fas fa-home "></i></NavLink></li>
                    <li><NavLink to="/about" activelassname='active'><i className="fas fa-users"></i></NavLink></li>
                    <li><NavLink to="/services" activeclassname='active'><i className="fas fa-business-time"></i></NavLink></li>
                    <li><NavLink to="/our_store" activeclassname='active'><i className="fas fa-shopping-bag"></i></NavLink></li>
                    <li><NavLink to="/blogs" activeclassname='active'><i className="fas fa-id-badge"></i></NavLink></li>
                </ul>
            </div>
            <div className="navigation">
                <ul className="topNav">
                    <li><img src="img/young minds watermark 1.png" alt="logo" /></li>
                    <li><h2>THE YOUNG MINDS</h2></li>
                    <li><i className="fas fa-solid fa-user"></i></li>
                </ul>
                <ul className='mainNav'>
                    <li><NavLink to="/" activelassname='active'>Home</NavLink></li>
                    <li><NavLink to="/about" activelassname='active'>About Us</NavLink></li>
                    <li><NavLink to="/services" activeclassname='active'>Services</NavLink></li>
                    <li><NavLink to="/our_store" activeclassname='active'>Our Store</NavLink></li>
                    <li><NavLink to="/blogs" activeclassname='active'>Blogs</NavLink></li>
                </ul>
                <div className='blank'></div>
            </div>
        </>
    )
}

export default Nav
