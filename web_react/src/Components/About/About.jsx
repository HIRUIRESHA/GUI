import React from 'react'
import './About.css'
import aboutus_image from '../../assets/aboutus_image.png';



const About = () => {
    return(
        <div className = 'about'>
            <div className="about-left">
                <img src={aboutus_image} alt="" className='about-img' />
            </div>
            <div className="about-right">
            <h3>About MovieLens</h3>
            <h2>Your Ultimate Movie & TV Series Companion</h2>
            <p> Welcome to MovieLens, your ultimate destination for discovering,
                 reviewing, and rating movies and TV series. At MovieLens,
                  we offer a platform where film lovers can explore the availability of their
                   favorite titles across different genres. With a simple sign-in, users gain access to detailed reviews, personalized ratings,
                    and the option to watch films directly.</p>
            <p>Before signing in, MovieLens provides a sneak peek into the availability
                 of movies and TV series, ensuring you always know what’s on.
                  Whether you're looking for recommendations,
                   want to share your thoughts, or enjoy a good movie night,
                    MovieLens is here to help you make the best choices.</p>
                    <p>Sign in today and join a community of movie enthusiasts who trust MovieLens
                         to guide their entertainment journey!</p></div>
        </div>
    )
}

export default About