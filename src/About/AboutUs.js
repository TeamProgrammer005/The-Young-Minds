import React from 'react'
import { useState, useEffect } from 'react'
import reviewsData from "./reviewsData.json"
import "./AboutUs.css"
import "./responsiveAbout.css"
import Mainpage from '../Mainpage/Mainpage'

export default function AboutUs() {
    const YMData = [
        {
            name: "Udit Sharma",
            para: "Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing design resources and how those at the top of the industry get things done through our podcast, interviews, articles, and live events.",
            post: "president",
            image: "img/uditSharma.jpg",
            id: 1
        },
        {
            name: "Pradyuma Agarwal",
            para: "Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing design resources and how those at the top of the industry get things done through our podcast, interviews, articles, and live events.",
            post: "leader",
            image: "img/young minds watermark 1.png",
            id: 2
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentName, setCurrentName] = useState("Minds")
    const [currentReview, setCurrentReview] = useState(0)
    const YMDataLength = YMData.length;
    const reviewLength = reviewsData.length;
    const autoScroll = true;
    let slideInterval;
    let reviewInterval;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === YMDataLength - 1 ? 0 : currentSlide + 1)
        setCurrentName(currentName === "Minds" ? "Leader" : "Minds")
    }
    const nextReview = () => {
        setCurrentReview(currentReview === reviewLength - 1 ? 0 : currentReview + 1)
    }
    const prevReview = () => {
        setCurrentReview(currentReview === 0 ? reviewLength - 1 : currentReview - 1)
    }
    useEffect(() => {
        setCurrentReview(0)
    }, [])

    function auto() {
        slideInterval = setInterval(nextSlide, 10000);
    }

    function autoReview() {
        reviewInterval = setInterval(nextReview, 10000);
    }

    const togglePage = (index) => {
        setCurrentSlide(index);
        setCurrentName(currentName === "Minds" ? "Leader" : "Minds");
    }

    const change = (index) => {
        setCurrentReview(index);
    }

    useEffect(() => {
        if (autoScroll) {
            autoReview();
        }
        return () => clearInterval(reviewInterval)
    }, [currentReview])

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, currentName])

    return (
        <>
            <div className="aboutDOM">
                <div className="introductionAbout">
                    <Mainpage title = "About Us" midHeading ="The Heart Of" companyName="Young Minds" purpose= "Education" community="Community" display="none" />
                    <div className="wordFromYoungMinds">
                        <h4>Words From</h4>
                        <h2>Young {currentName}</h2>
                        {YMData.map((slide, index) => {
                            return (
                                <div className={index === currentSlide ? "something current" : "something"} key={slide.id}>
                                    {index === currentSlide && (
                                        <>
                                            <div className="thoughts">
                                                <p>{slide.para}</p>
                                                <ul className='socialMediaIcons'>
                                                    <li><a href="https://www.facebook.com/theyoungminds.org/" target="_blank"><i className="fab fa-facebook-f utility"></i></a></li>
                                                    <li><a href="https://www.instagram.com/youngminds.education/" target="_blank"><i className="fab fa-instagram utility"></i></a></li>
                                                    <li><a href="https://twitter.com/theyoungminds_" target="_blank"><i className="fab fa-twitter utility"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="presidentDetails">
                                                <div className="imgBox">
                                                    <img src={slide.image} alt="" />
                                                </div>
                                                <h3>{slide.name}</h3>
                                                <span>{slide.post}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                        <div className="btnDOM">
                            {Array.from({ length: YMDataLength }).map((item, index) => {
                                return (
                                    <div className={currentSlide === index ? "btn active" : "btn"} key={index} onClick={() => togglePage(index)}></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="whyYoungMind">
                    <div className="answer">
                        <h2>Why Young Minds</h2>
                        <div className="logo">
                            <img src="img/young minds watermark 1.png" alt="" />
                            <p>We as an organization are driven towards making education equal and accessible for all, our mission is derived from the Sustainable Development Goals set by The United Nations for 2030. Our core activities involve providing quality education, innovation in industry and infrastructure and partnering with the people to achieve our goal.
                                It is time for disruption in the education sector our visons run together with government launched Atal Innovation Mission, which aims at making S.T.E.A.M Education the core of Indian Education system in the coming years. Therefore, we as team work towards making a platform where free knowledge can be shared with the world, and bring the next generation of learning to the schools and colleges of India</p>
                        </div>
                    </div>
                    <div className="studentCount">
                        <div className="empty new"></div>
                        <div className="empty new"></div>
                    </div>
                    <div className="studentCount">
                        <div className="student">
                            <h2>36000+</h2>
                            <h3>Happy Students</h3>
                        </div>
                        <div className="student">
                            <h2>36000+</h2>
                            <h3>Hours of fun classes</h3>
                        </div>
                    </div>
                    <div className="testimonials">
                        <h2>Testimonials</h2>
                        <div className="reviewsBox">
                            {reviewsData.map((review, index) => {
                                return (
                                    <div className={index === currentReview ? "reviews present" : "reviews"} key={review.key}>
                                        {index === currentReview && (
                                            <>
                                                <div className="empty profile">
                                                <i className="fas fa-solid fa-user utility"></i>
                                                </div>
                                                <div className="detail">
                                                    <h4>{review.name}</h4>
                                                    <span>{review.designation}</span>
                                                    <div className="rating">
                                                        {Array.from({ length: review.star }).map((item,index) => {
                                                            return (
                                                                <i className="fas fa-star utility" key={index}></i>
                                                            )
                                                        })}

                                                    </div>
                                                </div>
                                                <p>{review.review}</p>
                                            </>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="icons">
                            <i className="fas fa-chevron-left" onClick={prevReview} ></i>
                            <i className="fas fa-chevron-right" onClick={nextReview}></i>
                        </div>
                        <div className="btnDOM">
                            {Array.from({ length: reviewLength }).map((item, index) => {
                                return (
                                    <div className={currentReview === index ? "btn active" : "btn"} key={index} onClick={() => change(index)} ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}

