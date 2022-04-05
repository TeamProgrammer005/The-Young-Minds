import React from 'react'
import servicesIdeaData from "./servicesIdeaData.json"
import { useState, useEffect } from 'react'
import additionalServiceData from "./additionalServiceData.json"
import { Link } from "react-router-dom"
import "./Services.css"
import "./responsiveService.css"
import Mainpage from '../Mainpage/Mainpage'


export default function Services() {

    const [currentService, setCurrentService] = useState(0)

    const serviceDataLength = additionalServiceData.length;
    const autoScroll = true;
    let slideInterval;

    const nextSlide = () => {
        setCurrentService(currentService === serviceDataLength - 1 ? 0 : currentService + 1)
    }
    function auto() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    const togglePage = (index) => {
        setCurrentService(index);
    }
    
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentService])
    const client = [{ name: "Something", img: "img/male_01.png" }, { name: "Something", img: "img/male_02.png" }, { name: "Something", img: "img/male_03.png" }, { name: "Something", img: "img/male_04.png" }, { name: "Something", img: "img/male_05.png" }]
    return (
        <div>
            <div className="serviceDOM">
                <Mainpage title="Services" midHeading="The Heart Of" companyName="Young Minds" purpose="Education" community="Community" display="none"/>
                <div className="services_idea">
                    <h4>Turn your</h4>
                    <h2>ideas into life</h2>
                    {servicesIdeaData.map((data, index) => {
                        return (
                            <div className="serviceIdeaSection" key={index}>
                                <div className={data.outerClass}>

                                    <div className="outerBox">
                                        <div className={data.innerClass}>

                                            <div className="innerBox">
                                                <span>Step</span>
                                                <b>0{data.number}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ideas">
                                    <h4>{data.title}</h4>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="additionalService">
                    <h3>Additional</h3>
                    <h2>Features</h2>
                    <p>a sneak peak of our fun and interactive sessions ...</p>
                    <div className="additional_feature_slide">
                        {additionalServiceData.map((data, index) => {
                            return (
                                <div className={currentService === index ? "additional_feature_section_slide show" : "additional_feature_section_slide"}>
                                    {index === currentService && (
                                        <>
                                            <h4>{data.title}</h4>
                                            <img src="img/young minds watermark 1.png" alt="logo" />
                                            <p>{data.desc}</p>
                                            <button className='btn_service'><Link to="/read_more">Read More</Link></button>
                                        </>
                                    )}

                                </div>
                            )
                        })}
                        <div className="btnDOM">
                            {Array.from({ length: serviceDataLength }).map((item, index) => {
                                return (
                                    <div className={currentService === index ? "btn active" : "btn"} key={index} onClick={() => togglePage(index)}></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="additional_feature">
                        {additionalServiceData.map((data, index) => {
                            return (
                                <>
                                    <div className='additional_feature_section' key={index}>
                                        <h4>{data.title}</h4>
                                        <img src="img/young minds watermark 1.png" alt="logo" />
                                        <p>{data.desc}</p>
                                        <button className='btn_service'><Link to="/read_more">Read More</Link></button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="field_expertise">
                    <h3>field</h3>
                    <h2>Expertise</h2>
                    <p>a sneak peak of our fun and interactive sessions ...</p>
                    <div className="fieldsBox">
                        {Array.from({ length: 4 }).map((fields, index) => {
                            return (
                                <div className="fields" key={index}>
                                    <div className="empty"></div>
                                    <h3>36000+</h3>
                                    <h4>Happy Students</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="our_clients">
                    <h2>Our clients</h2>
                    <p>a sneak peak of our fun and interactive sessions ...</p>
                    <div className="clientImg_container">
                        {client.map((image, index) => {
                            return (
                                <img src={image.img} alt="clients" key={index} />
                            )
                        })}
                    </div>
                    <p className='clients_para'>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazingBeyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazingBeyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing</p>
                </div>
                <div className="subscribe">
                    <input type="email" name="email" placeholder="Please enter a valid email ..." />
                    <button className='subscribe_now'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
