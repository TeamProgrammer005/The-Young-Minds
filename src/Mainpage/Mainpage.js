import React from 'react'
import "./Mainpage.css"


export default function (props) {
    const toggleDisplay= props.toggleDisplay;
    const display = props.display;
    const _display= props._display;
    const headingDisplay = props.headingDisplay;
    const buttonDisplay =props.buttonDisplay;
    return (
        <div>
            {/* Landing page content taken from props form each pages to change accordingly*/}
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
                        <div className="inputDOM" style={{display: display}}>
                        <select name="dropdownCat" id="dropdownCat" className='dropdownCat'>
                            <option value="select_cateogry">Select Category</option>
                            <option value="science">3D Printer for Education</option>
                            <option value="technology">3D Printer for Industrial Use</option>
                            <option value="engineering">3D Printer for Jewelry Design</option>
                        </select>
                    
                    </div>
                        <div className="service-inputDOM inputDOM" style={{display: _display}}>
                        <select name="dropdownCat" id="dropdownCat" className='dropdownCat'>
                            <option value="select_cateogry">Select Category</option>
                            <option value="science">Addictive Manufacturing</option>
                            <option value="science">3D Modelling</option>
                            <option value="science">Fix Your Printer</option>
                        </select>
                    
                    </div>
                        <a href= {props.btnLink} target="_blank" ><button style={{display:buttonDisplay }}>{props.btnText}</button></a>
                        
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

