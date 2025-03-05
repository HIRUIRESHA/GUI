import React, { useEffect, useState } from 'react';
import './Tv.css';
import { Link } from 'react-router-dom';

import trending from '../../assets/trending.png';
import rated from '../../assets/rated.png';
import upcoming from '../../assets/upcoming.png';
import bringe from '../../assets/bringe.png';
import favorite from '../../assets/favorite.png';
import d1 from '../../assets/1.jpg';
import d2 from '../../assets/2.jpg';
import d3 from '../../assets/3.jpg';
import d4 from '../../assets/4.jpg';
import d5 from '../../assets/5.jpg';
import d6 from '../../assets/6.jpg';
import a1 from '../../assets/10.jpg';
import a2 from '../../assets/11.jpg';
import a3 from '../../assets/12.jpg';
import a4 from '../../assets/13.jpg';
import a5 from '../../assets/14.jpg';
import a6 from '../../assets/15.jpg';
import a7 from '../../assets/16.jpg';
import a8 from '../../assets/17.jpg';

const Tv = () => {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);
  
    const leftImages = [a1, a2, a3, a4, a5, a6, a7, a8];
    const rightImages = [d1, d2, d3, d4, d5, d6];
  
    useEffect(() => {
      const leftInterval = setInterval(() => {
        setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
      }, 5000);
      return () => clearInterval(leftInterval);
    }, []);
  
    useEffect(() => {
      const rightInterval = setInterval(() => {
        setRightImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
      }, 4000);
      return () => clearInterval(rightInterval);
    }, []);
  
    return (
      <div className="tv">
        <div className="tv-icons">
          <ul>
            <li><img src={trending} alt="Trending" /><Link to="/Tvpage/Tvpage" className='tv-link'><span>Trending Series</span></Link></li>
            <li><img src={rated} alt="Top Rated" /><Link to="/Tvpage/Tvpage" className='tv-link'><span>Top-Rated Series</span></Link></li>
            <li><img src={upcoming} alt="Upcoming" /><Link to="/Tvpage/Tvpage" className='tv-link'><span>New & Upcoming Series</span></Link></li>
            <li><img src={bringe} alt="Bringe Worthy" /><Link to="/Tvpage/Tvpage" className='tv-link'><span>Bringe-Worthy Series</span></Link></li>
            <li><img src={favorite} alt="Fan Favorite" /><Link to="/Tvpage/Tvpage" className='tv-link'><span>Fan Favorite Series</span></Link></li>
          </ul>
        </div>
  
        <div className="tv-content">
          <div className="tv-slideshow-left">
            <img src={leftImages[leftImageIndex]} alt="Left Slideshow" />
          </div>
  
          <div className="tv-slideshow-right">
            <img src={rightImages[rightImageIndex]} alt="Right Slideshow" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Tv;
