import React from 'react'
import Mainpage from '../Mainpage/Mainpage'
import "./Community.css"

export default function Community() {
  return (
    <div>
        <div className="communityDOM">
        <Mainpage title = "." midHeading ="Never Stop Learning___" companyName="Discover scientific" LibraryDetail="Knowledge and stay"  LibraryDetails= "connect to the world" purpose= "of STEAM" community="" display="none" img="img/about.png" toggleDisplay="none" buttonDisplay= "block" headingDisplay="block"/>
        <div className="discoverSteam">
            <h4>DISCOVER</h4>
            <h2>STEAM</h2>
            <div className="steamDesc">
                <div>
                    <p>A sneak peak into our fun and interactive sessions.</p>

                </div>
                <div className="blankedLine"></div>
                <img src="img/unnamed 1.png" alt="" />
            </div>
        </div>
        <div className="steamCommunity">
        <h4>connect with your</h4>
            <h2>STEAM community</h2>
            <div className="steamCategoryDOM">
                <p>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing design resources and how those at the top of the industry get things done through our podcast, interviews, articles, and live events..</p>
                <div className='steamCategories12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta vero voluptate perferendis qui dolores voluptates delectus in repellendus! Inventore perspiciatis quaerat consequatur quos debitis nesciunt doloremque dolorum praesentium nostrum!</div>
            </div>
        </div>
        </div>

    </div>
  )
}
