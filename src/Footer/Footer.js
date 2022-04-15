import React from 'react'
import "./Footr.css"
import {Link} from "react-router-dom"

export default function 
() {
  return (
    <div>
          <div className="footer">
                    <ul className="navigate">
                        <h4>Navigate To</h4>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/privacy_policy" className='toggleGrid'>Privacy Policy</Link></li>
                        <li className='try'><Link to="/conditions">Terms & Condition</Link></li>
                        <li className='toggle'><Link to="/conditions">T & C</Link></li>
                        {/* <li><Link to="/contact">Contact Us</Link></li> */}
                    </ul>
                    <div className="shortIntro">
                        <img src="img/young minds watermark 1.png" alt="" />
                        <h4>THE YOUNG MINDS</h4>
            <p>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place .</p>
                        {/* <img src="img/young minds watermark 1.png" alt="logo" /> */}
                    </div>
                    <div className='blankLine'></div>
                    <div className="socialMedia">
                        <h4>Follow Us</h4>
                    <ul className='socialMediaIcons'>
                        <li><a href="https://www.facebook.com/theyoungminds.org/" target="_blank"><i className="fab fa-facebook-f utility"></i></a></li>
                        <li><a href="https://www.instagram.com/youngminds.education/" target="_blank"><i className="fab fa-instagram utility"></i></a></li>
                        <li><a href="https://twitter.com/theyoungminds_" target="_blank"><i className="fab fa-twitter utility"></i></a></li>
                    </ul>
                    </div>
                <span className='copyright'>&copy; 2022 Theyoungminds all rights reserved.</span>
                </div>
    </div>
  )
}
