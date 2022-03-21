import React from 'react'
import { useState, useEffect } from 'react'
import reviewsData from "./reviewsData.json"
import "./AboutUs.css"

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
                    <div className="navigation">
                        <ul>
                            {/* <li><i className="fas fa-solid fa-bars utility"></i></li> */}
                            <li><h2>Young Minds</h2></li>
                            
                        </ul>
                        <div className="user">
                           <img src="img/young minds watermark 1.png" alt="" />
                        </div>
                    </div>
                    <span>Welcome Back!</span>
                    <div className="sectionAbout">
                        <img src="img/about.png" alt="" />
                        <div className="contentAbout">
                            <h3 className='title'>About us</h3>
                            <div className="midHeading">
                                <h4>The Heart Of</h4>
                                <h2 className="heading">Young Minds <br /> Education</h2>
                                <h4>community</h4>
                            </div>
                        </div>
                        <div className="para">
                            <i className="fas fa-solid fa-quote-left"></i>
                            <p>We’re on a mission to build the world’s best community for making education Equitable & Accessible</p>
                            <i className="fas fa-solid fa-quote-right"></i>
                        </div>
                    </div>
                    <div className="blank"></div>
                    <div className="wordFromYoungMinds">
                        <h4>Words From</h4>
                        <h2>Young {currentName}</h2>
                        {YMData.map((slide, index) => {
                            return (
                                <div className={index === currentSlide ? "something current" : "something"} key={slide.id}>
                                    {index === currentSlide && (
                                        <>
                                            <div className="thoughts" key={slide.id}>
                                                <p>{slide.para}</p>
                                                <ul className='socialMediaIcons'>
                                                    <li><a href="/"><i className="fas fa-envelope utility"></i></a></li>
                                                    <li><a href="/"><i className="fab fa-yahoo utility"></i></a></li>
                                                    <li><a href="/"><i className="fab fa-linkedin-in utility"></i></a></li>
                                                    <li><a href="/"><i className="fab fa-apple utility"></i></a></li>
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
                                    <div className={currentSlide === index ? "btn active" : "btn"} onClick={() => togglePage(index)}></div>
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
                        <div className="empty"></div>
                        <div className="empty"></div>
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
                        <span>Description goes here...</span>
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
                                                        {Array.from({ length: review.star }).map(item => {
                                                            return (
                                                                <i className="fas fa-star utility"></i>
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
                                    <div className={currentReview === index ? "btn active" : "btn"} onClick={() => change(index)} ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <ul className="navigate">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Serivces</a></li>
                        <li><a href="/">Our store</a></li>
                        <li><a href="/">Term's & condition</a></li>
                    </ul>
                    <div className="socialMedia">
                        <h4>Follow Us</h4>
                    <ul className='socialMediaIcons'>
                        <li><a href="/"><i className="fas fa-envelope utility"></i></a></li>
                        <li><a href="/"><i className="fab fa-yahoo utility"></i></a></li>
                        <li><a href="/"><i className="fab fa-linkedin-in utility"></i></a></li>
                        <li><a href="/"><i className="fab fa-apple utility"></i></a></li>
                    </ul>
                    </div>
                    <div className="shortIntro">
                        <h4>The Young Minds</h4>
                        <img src="img/young minds watermark 1.png" alt="logo" />
                    </div>
                <span className='copyright'>&copy; 2022 Theyoungminds all rights reserved.</span>
                </div>
            </div>
        </>
    )
}
