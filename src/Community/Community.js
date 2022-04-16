import React from 'react'
import Mainpage from '../Mainpage/Mainpage'
import "./Community.css"
import { Link } from "react-router-dom"
export default function Community() {
  return (
    <div>
        <div className="communityDOM">
            {/* Adding main landing page */}
        <Mainpage title = "" midHeading ="Never Stop Learning___" companyName="Discover scientific" LibraryDetail="Knowledge and stay"  LibraryDetails= "connect to the world" purpose= "of STEAM" community="" display="none" img="img/about.png" toggleDisplay="none" buttonDisplay= "block" headingDisplay="block" btnText="Join Us" btnLink="/community"/>
        {/* section 1 for discover steam */}
        <div className="discoverSteam">
            <h4>DISCOVER</h4>
            <h2>STEAM</h2>
            <div className="steamDesc">
                <div>
                    <p>A sneak peak into our fun and interactive sessions.</p>
                    <div className="dropdownCategory">
                        <select name="dropdownCat" id="dropdownCat">
                            <option value="select_cateogry">Select Category</option>
                            <option value="science">Science</option>
                            <option value="technology">Technology</option>
                            <option value="engineering">Engineering</option>
                            <option value="arts">Arts</option>
                            <option value="mathematics">Mathematics</option>
                        </select>
                        <Link to= "/community"><button>Search</button></Link>
                    </div>
                </div>
                <div className="blankedLine"></div>
                <img src="img/unnamed 1.png" alt="" />
            </div>
        </div>
        {/* section 2 for steam community */}
        <div className="steamCommunity">
        <h4>connect with your</h4>
            <h2>STEAM community</h2>
            <div className="steamCategoryDOM">
                <p>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing design resources and how those at the top of the industry get things done through our podcast, interviews, articles, and live events..</p>
                <div className='steamCategories12'>
                    <ul>
                        <Link to="/community"><li>Topic 1</li></Link>
                        <Link to="/community"><li>Topic 2</li></Link>
                        <Link to="/community"><li>Topic 3</li></Link>
                        <Link to="/community"><li>Topic 4</li></Link>
                        <Link to="/community"><li>Topic 5</li></Link>
                        <Link to="/community"><li>Topic 6</li></Link>
                        <Link to="/community"><li>Topic 7</li></Link>
                    </ul>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}
