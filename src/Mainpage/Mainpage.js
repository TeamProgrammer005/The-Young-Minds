import React from 'react'
import "./Mainpage.css"
import { useState } from 'react';


export default function (props) {
    const [left, setLeft] = useState(4)
    const display = props.display;
    const toggleLeft = ()=>{
        setLeft(74);
    }
    return (
        <div>
            <div className="sectionAbout">
                <img src="img/about.png" alt="" />
                <div className="contentAbout">
                    <h3 className='title'>{props.title}</h3>
                    <div className="midHeading">
                        <h4>{props.midHeading}</h4>
                        <h2 className="heading">{props.companyName} <br /> {props.purpose}</h2>
                        <h4>{props.community}</h4>
                        <div className="inputDOM" style={{display: display}}>
                        <input type="text"  placeholder=' Search in store...' onClick={toggleLeft}/>
                        <i className="fas fa-search" style={{left : `${left}%`}}></i>
                        </div>
                        
                    </div>
                </div>
                <div className="para">
                    <i className="fas fa-solid fa-quote-left"></i>
                    <p>We’re on a mission to build the world’s best community for making education Equitable & Accessible</p>
                    <i className="fas fa-solid fa-quote-right"></i>
                </div>
            </div>
            <div className="blank"></div>
        </div>
    )
}

