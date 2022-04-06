import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import "./resposiveHome.css"
import homeData from "./homeData.json"
import Update from "./updates.json"
import Mainpage from '../Mainpage/Mainpage'

export default function Home() {
    // const category = ["science","technology","engineering","arts","mathematics","physics","chemistry","biology"]
  return (
    <div>
        <div className="homeDOM">
        <Mainpage title = "Home" midHeading ="The Heart Of" companyName="Young Minds" purpose= "Education" community="Community" display="none"/>
            <div className="startYourJourney">
                <h4>Start Your</h4>
                <h2 className='topHeading'>Journey</h2>
                <span>Description goes here...</span>
            <div className="basic_journeys_collection">
                        {Array.from({length : 4}).map((data, index) => {
                            return (
                                <>
                                   <div className="basic_journey" key={index}>
                                       <h3>Looking to boost your</h3>
                                       <h2>learning?</h2>
                                       <p>Start my journey as learner</p>
                                       <img src="img/homeOnlineTool.png" alt="" />
                                   </div>
                                </>
                            )
                        })}
                    </div>  
                </div> 
                <div className="category_section">
                    <div className="category_nav">
                        <div className="nav_heading">
                            <h2>CATEGORIES</h2>
                            <p>A sneak peak of fun and interactive sessions.</p>
                        </div>
                        <div className="viewAll">
                            <Link to="./home/categories"><span>view all</span></Link>
                            <i className='fas fa-chevron-right'></i>
                        </div>
                    </div>
                        <div className="typeOf">
                           <ul>
                               <li>Science</li>
                               <li>technology</li>
                               <li>engineering</li>
                               <li>arts</li>
                           </ul>
                           <ul>
                               <li>mathematics</li>
                               <li>Physics</li>
                               <li>chemistry</li>
                               <li>Biology</li>
                           </ul>
                        </div>
                </div>
                 <div className="home_featured">
                 <div className="featured_nav">
                        <div className="nav_heading">
                            <h2>FEATURED</h2>
                            <p>A sneak peak of fun and interactive sessions.</p>
                        </div>
                        <div className="viewAll">
                        <Link to="./home/fetuared" ><span>view all</span></Link>
                            <i className='fas fa-chevron-right'></i>
                        </div>
                    </div>   
                        <div className="courses">
                            {homeData.map((data, index)=>{
                                return (
                                    <div className="courseDetail" key={index}>
                                        <img src={data.img} alt="course banner" />
                                        <div className="video">

                                        <i className="fas fa-play utility"></i>
                                        </div>
                                        <h4>{data.name}</h4>
                                        <div className="course-desc">
                                        <i className="fas fa-play utility"></i>
                                        <p>{data.desc}</p>
                                        <i className="fas fa-bookmark utility"></i>
                                        </div>
                                        <div className="ratingOfCourse">

                                        <span><i className="fas fa-star utility"></i></span>
                                        <span>{data.star}({data.views}K)</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                <div className="updateFromCommunity">
                    <h4>Update From </h4>
                    <h2>Community</h2>
                    <p>A sneak peak of fun and interactive sessions.</p>
                    <div className="updatedDOM">
                        {Update.map((data, index)=>{
                            return(
                                <div className="updates" key={index}>
                                    <i className="fas fa-share-alt utility"></i>
                                    <div className="update_intro">
                                        <div className="blank"></div>
                                        <div className="intro">
                                            <h6>{data.name}</h6>
                                            <span>{data.designation}</span>
                                            <span className="time">{data.time}</span>
                                        </div>
                                    </div>
                                    <div className="updates_desc">
                                        <div className="empty"></div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti placeat, deleniti tempore officia, voluptates hic soluta nobis porro sunt consequatur at provident pariatur, modi atque ipsa? Minima, nam ducimus.</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="upcomingEvents">
                    <h4>Upcoming</h4>
                    <h2>Events</h2>
                    <div className="eventDOM">
                        {Array.from({length: 4}).map((data, index)=>{
                            return(
                                <div className="eventDetails" key={index}>
                                    <img src="img/Mask Group.png" alt="" />
                                    <div className='eventTiming'>
                                       <span> 01 Mar</span>
                                       
                                        <span className="fas fa-bookmark utility"></span>
                                    </div>
                                    <h4>Title</h4>
                                    <span><i className="fas fa-map-marker-alt"></i> Location</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="headingWorkshop">
                    <h4>Heading</h4>
                    <h2>Workshop</h2>
                    <p>A sneak peak of fun and interactive sessions.</p>
                    <div className="workshopDOM">
                        {Array.from({length : 4}).map((data, index)=>{
                            return(
                                <div className="workshop-details" key={index}>
                                    <img src="img/about.png" alt="" />
                                    <span className="fas fa-bookmark utility"></span>
                                    <div className="workshop-time">
                                        <span>01 <br /> Mar</span>
                                    </div>
                                    <h5>Title</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reiciendis ea minima libero expedita a?</p>
                                    <Link to='/home/workshop'><button>Know More</button></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    </div>
  )
}
