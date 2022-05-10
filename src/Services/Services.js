import React from 'react'
import servicesIdeaData from "./servicesIdeaData.json"
import { useState, useEffect } from 'react'
import additionalServiceData from "./additionalServiceData.json"
// import { Link } from "react-router-dom"
import "./Services.css"
import "./responsiveService.css"
import Mainpage from '../Mainpage/Mainpage'
import our_products from './our_products.json'
// import storeProduct from "../Our_Store/storeProduct.json"


export default function Services() {
    const fieldExpertise = [{name: "", img: ""},{name: "", img: ""},{name: "", img: ""},{name: "", img: ""}]
    const [currentService, setCurrentService] = useState(0)

    const serviceDataLength = additionalServiceData.length;
    const autoScroll = true;
    let slideInterval;
    // functions for slider
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
                <Mainpage title="." midHeading="Never Stop Learning___" companyName="TOGETHER WE CAN" purpose="CREATE AN IMPACT" community="" display="none" img="img/services.png" toggleDisplay="none" buttonDisplay="none" headingDisplay="none" btnText="Search" _display="block" buttonDisplay_store="block"/>
                {/* Section 1 ideas */}
                <div className="services_idea">
                    <h4 style={{marginLeft: "20px"}}>Turn your</h4>
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
                                    <p className='showNhide'>{data.desc}</p>
                                    <p className='hideNshowP'>{data.mobileDesc}</p>
                                    <a href={data.link} target= "_blank"><button>START</button></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* section 2 additional features */}
                <div className="additionalService">
                    <h4>Additional</h4>
                    <h2>Features</h2>
                    <p>A sneak peak of our fun and interactive sessions ...</p>
                    <div className="additional_feature">
                        {additionalServiceData.map((data, index) => {
                            return (
                                <>
                                    <div className='additional_feature_section' key={index}>
                                        <h4>{data.title}</h4>
                                        <img src={data.img} alt="logo" />
                                        <p>{data.desc}</p>
                                        <a href={data.link} target="_blank" className='btn_service'><button >Know More</button></a>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {/* section 3 store products */}
                <div className="store_featured">
                    <div className="featured_nav">
                        <div className="nav_heading">
                            <h2>OUR PRODUCT</h2>
                        </div>
                        <div className="viewAll">
                            {/* <Link to="./home/categories"><i className="fas fa-info-circle utility"></i></Link>
                            <Link to="./home/categories"><span>view all</span></Link>
                            <i className='fas fa-chevron-right'></i> */}
                        </div>
                    </div>
                    <div className="store_products">
                        {our_products.map((data, index) => {
                            return (
                                <div className="store-product_details" key={index}>
                                    <img src={data.img} alt="our_product" />
                                    <div className="product_desc">
                                        <h4>{data.title}</h4>
                                        {/* <h4>${data.price}.00</h4> */}
                                    </div>
                                    <h6>{data.name}</h6>
                                
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* section 4 expertise */}
                <div className="field_expertise">
                    <h4>field</h4>
                    <h2>Expertise</h2>
                    <p>A sneak peak of our fun and interactive sessions ...</p>
                    <div className="fieldsBox">
                        {fieldExpertise.map((fields, index) => {
                            return (
                                <div className="fields" key={index}>
                                    <div className="empty"></div>
                                    {/* <h3>36000+</h3> */}
                                    <h4>Happy Students</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* section 5 clients */}
                <div className="our_clients">
                    <h2>Our clients</h2>
                    <p>A sneak peak of our fun and interactive sessions ...</p>
                    <div className="clientImg_container">
                        {client.map((image, index) => {
                            return (
                                <img src={image.img} alt="clients" key={index} />
                            )
                        })}
                    </div>
                    <p className='clients_para'>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazingBeyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazingBeyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing</p>
                </div>
            </div>
        </div>
    )
}
