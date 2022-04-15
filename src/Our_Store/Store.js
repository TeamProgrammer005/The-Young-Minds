import React from 'react'
import { Link } from 'react-router-dom'
import Mainpage from '../Mainpage/Mainpage'
import "./Store.css"
import storeCategory from "./storeCateogry.json"
import "./responsiveStore.css"

export default function Store() {
  return (
    <div>
      <div className="storeDOM">
      <Mainpage title = "." midHeading ="Never Stop Learning___" companyName="TOGETHER WE CAN" purpose= "CREATE AN IMPACT" community="" display="flex" img="img/about.png" toggleDisplay="none" buttonDisplay= "none" headingDisplay="none"/>
        <div className="store_featured">
          <div className="featured_nav">
            <div className="nav_heading">
              <h4>FEATURED</h4>
              <h2>PRODUCT</h2>
            </div>
            <div className="viewAll">
            <i className="fas fa-thumbtack utility"></i>
                        <Link to="./home/categories"><i className="fas fa-info-circle utility"></i></Link>
                        <Link to="./home/categories"><span>view all</span></Link>
                        <i className='fas fa-chevron-right'></i>
                        </div>
          </div>
          <div className="store_products">
            {Array.from({ length: 8 }).map((data, index) => {
              return (
                <div className="store-product_details" key={index}>
                  <img src="img/product.png" alt="our_product" />
                  <div className="product_desc">
                    <h4>Product Title</h4>
                    <h4>$20.00</h4>
                  </div>
                  <h6>Product Name</h6>
                  <div className="product_carting">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-cart-plus"></i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="store_categories">
          <h4>TOP</h4>
          <h2>Categories</h2>
          <div className="categories_DOM">
            {storeCategory.map((data, index) => {
              return (
                <>
                  <div className='categories_box' key={index}>
                    <h4>{data.title}</h4>
                    <h4>{data.title2}</h4>
                    <img src="img/categories.png" alt="" />
                    <Link to="/our_store/more" className='navButton'><button>More</button></Link>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className="featured_story">
          <h4>FEATURED</h4>
          <h2>STORY</h2>
          <div className="stories-intro">
            <div className="story-teller">
              <h4>Name of the person</h4>
              <p>“Enabled me to pursue my passion for lettering full-time“</p>
              <h5>Get inspired by name <i className="fas fa-chevron-right utility"></i></h5>
            </div>
            <div className="stories-frame">
              <div className="story1 stroy"><img src="img/categories.png" alt="" /></div>
              <div className="story2 stroy"><img src="img/image 4.png" alt="" /></div>
              <div className="story2 stroy"><img src="img/image 4.png" alt="" /></div>
              <div className="story2 stroy"><img src="img/image 4.png" alt="" /></div>
              <div className="story2 stroy"><img src="img/image 4.png" alt="" /></div>
            </div>
          </div>
        </div>

        <div className="store_featured">
          <div className="featured_nav">
            <div className="nav_heading">
              <h4>NOW IN</h4>
              <h2>TREND</h2>
            </div>
            <div className="viewAll">
            <i className="fas fa-thumbtack utility"></i>
                        <Link to="./home/categories"><i className="fas fa-info-circle utility"></i></Link>
                        <Link to="./home/categories"><span>view all</span></Link>
                        <i className='fas fa-chevron-right'></i>
                        </div>
          </div>
          <div className="store_products">
            {Array.from({ length: 8 }).map((data, index) => {
              return (
                <div className="store-product_details" key={index}>
                  <img src="img/product.png" alt="our_product" />
                  <div className="product_desc">
                    <h4>Product Title</h4>
                    <h4>$20.00</h4>
                  </div>
                  <h6>Product Name</h6>
                  <div className="product_carting">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i>
                    <i className="fas fa-cart-plus"></i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
