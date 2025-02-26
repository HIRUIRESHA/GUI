import React, { useEffect, useState } from 'react';
import './Tv.css'
import { Link } from 'react-router-dom'

import trending from '../../assets/trending.png'
import rated from '../../assets/rated.png'
import upcoming from '../../assets/upcoming.png'
import bringe from '../../assets/bringe.png'
import favorite from '../../assets/favorite.png'
import d1 from '../../assets/1.jpg'
import d2 from '../../assets/2.jpg'
import d3 from '../../assets/3.jpg'
import d4 from '../../assets/4.jpg'
import d5 from '../../assets/5.jpg'
import d6 from '../../assets/6.jpg'
import a1 from '../../assets/10.jpg'
import a2 from '../../assets/11.jpg'
import a3 from '../../assets/12.jpg'
import a4 from '../../assets/13.jpg'
import a5 from '../../assets/14.jpg'
import a6 from '../../assets/15.jpg'
import a7 from '../../assets/16.jpg'
import a8 from '../../assets/17.jpg'

/*const Tv = () =>{
    return(
        <div className = 'tv'>
            <ul>
                <li><img src={trending} alt="" />Trending Series</li>
                <li><img src={rated} alt="" />Top-Rated Series</li>
                <li><img src={upcoming} alt="" />New & Upcoming Sereis</li>
                <li><img src={bringe} alt="" />Bringe-Worthy Series</li>
                <li><img src={favorite} alt="" />Fan Favorite Series</li>
            </ul>
        </div>
    )
}

export default TV*/ 

const Tv = () => {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);
  
    const leftImages = [a1, a2, a3, a4, a5, a6, a7, a8];
    const rightImages = [d1, d2, d3, d4, d5, d6];
  
    // Slideshow for left side (5s interval)
    useEffect(() => {
      const leftInterval = setInterval(() => {
        setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
      }, 1500);
      return () => clearInterval(leftInterval);
    }, [leftImages.length]);
  
    // Slideshow for right side (4s interval)
    useEffect(() => {
      const rightInterval = setInterval(() => {
        setRightImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
      }, 1000);
      return () => clearInterval(rightInterval);
    }, [rightImages.length]);
  
    return (
      <div className="tv">
        {/* Icon Section */}
        <div className="tv-icons">
          <ul>
            <li>
              <img src={trending} alt="Trending" />

              <Link to="/Tvpage/Tvpage" className='tv-link'>
              <span>Trending Series</span></Link>
            </li>
            <li>
              <img src={rated} alt="Top Rated" />
              <Link to="/Tvpage/Tvpage" className='tv-link'>
              <span>Top-Rated Series</span></Link>
            </li>
            <li>
              <img src={upcoming} alt="Upcoming" />
              <Link to="/Tvpage/Tvpage" className='tv-link'>
              <span>New & Upcoming Series</span></Link>
            </li>
            <li>
              <img src={bringe} alt="Bringe Worthy" />
              <Link to="/Tvpage/Tvpage" className='tv-link'>
              <span>Bringe-Worthy Series</span></Link>
            </li>
            <li>
              <img src={favorite} alt="Fan Favorite" />
              <Link to="/Tvpage/Tvpage" className='tv-link'>
              <span>Fan Favorite Series</span></Link>
            </li>
          </ul>
        </div>
  
        {/* Slideshow Section */}
        <div className="tv-content">
          {/* Left Slideshow */}
          <div className="tv-slideshow left">
            <img src={leftImages[leftImageIndex]} alt="Left Slideshow" />
          </div>
  
          {/* Right Slideshow */}
          <div className="tv-slideshow right">
            <img src={rightImages[rightImageIndex]} alt="Right Slideshow" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Tv