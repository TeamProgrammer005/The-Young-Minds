import React from 'react'
import "./Mainpage.css"
import { useState } from 'react';


export default function (props) {
    const [left, setLeft] = useState(4)
    const toggleDisplay= props.toggleDisplay;
    const display = props.display;
    const headingDisplay = props.headingDisplay;
    const buttonDisplay =props.buttonDisplay;
    const toggleLeft = ()=>{
        setLeft(74);
    }
    return (
        <div>
            <div className="sectionAbout">
                <img src={props.img} alt="" />
                <div className="squareDOM"><div className="innerSquare"><div className="boxSquare"></div></div></div>
                <div className="contentAbout">
                    <h3 className='title'>{props.title}</h3>
                    <div className="midHeading">
                        <div className='square'></div>
                        <h4>{props.midHeading}</h4>
                        <h2 className="heading">{props.companyName}</h2>
                        <h2 style={{display: headingDisplay}} className="heading">{props.LibraryDetail}</h2>
                        <h2 style={{display: headingDisplay}}className="heading">{props.LibraryDetails}</h2>
                        <h2 className='heading shadow'>{props.purpose}</h2>
                        <h4>{props.community}</h4>
                        <p style={{display: toggleDisplay}}>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing design resources and how those at the top of the industry get things done through our podcast, interviews, articles, and live events.</p>
                        <button style={{display:buttonDisplay }}>Know More</button>
                        <div className="inputDOM" style={{display: display}}>
                        <input type="text"  placeholder=' Search in store...' onClick={toggleLeft}/>
                        <i className="fas fa-search" style={{left : `${left}%`}}></i>
                        </div>
                        
                    </div>
                </div>
                <div className="para">
                    <i className="fas fa-solid fa-quote-left"></i>
                    <p>We’re on a mission towards global sustainable development goal for making education Equitable & Accessible</p>
                    <i className="fas fa-solid fa-quote-right"></i>
                </div>
            </div>
            <div className="blank"></div>
        </div>
    )
}

