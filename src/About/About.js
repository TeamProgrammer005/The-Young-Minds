import React from 'react'
import './About.css'
import { sliderData } from "./sliderdata"
import { useState, useEffect } from 'react'


export default function About() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }
  const trying = (index) => {
    setCurrentSlide(index);
  }
  function auto() {
    slideInterval = setInterval(nextSlide, 10000);
  }
  useEffect(() => {
    setCurrentSlide(0)
  }, [])
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])
  return (
    <>
      <div className="aboutDOM">
        <div className="title">
          <i className="fas fa-chevron-left"></i>
          <h1>About</h1>
        </div>
        <div className='blank'></div>
        <div className="fields">
          {sliderData.map(slide => {
            return (
              <div className='fields_content'>
                <div className="fields_img">
                  <img src={slide.image} alt="" />
                </div>
                <div className='fields_desc'>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="slider">
          <div className="icons">
            <i className="fas fa-chevron-left" onClick={prevSlide}></i>
            <i className="fas fa-chevron-right" onClick={nextSlide}></i>
          </div>
          {sliderData.map((slide, index) => {
            return (
              <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                  <>
                    <div className="imgDOM">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="description">
                      <h2>{slide.heading}</h2>
                      <p>{slide.desc}</p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
          <div className="btnDOM">
            {Array.from({ length: slideLength }).map((item, index) => {
              return (
                <div className={currentSlide === index ? "btn active" : "btn"} onClick={() => trying(index)}></div>
              )
            })}
          </div>
        </div>
        <div className="anyBtn">
          <button className="any">button</button>
        </div>
      </div>
    </>
  )
}
