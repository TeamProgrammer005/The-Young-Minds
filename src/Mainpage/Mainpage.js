import React from 'react'
import "./Mainpage.css"


export default function (props) {
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

