import React from 'react'
import './Hero.css'
import right_arrow_icon from '../../assets/arrow_icon.png'

const Hero = () =>
{
    return(
        <div className = 'hero container'>
            <div className = 'hero-text'>
                <h1>Illuminating the Best in Cinema</h1>
                <p>Dive into the world of cinema with our vibrant movie review
                     and rating app! Whether you’re a casual viewer or a film enthusiast,
                      share your thoughts, explore genuine reviews, and rate your favorite movies.
                       Discover hidden gems, track trending films, and connect with a community of like-minded movie lovers.
                        From blockbusters to indie flicks, let your voice shape the world of entertainment!</p>
                        <button className = 'btn'>Explore more<img src = {right_arrow_icon} alt = "" /></button>        
            </div>
        </div>
    )
}

export default Hero 