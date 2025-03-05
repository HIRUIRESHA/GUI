
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaFilm, FaStar, FaUsers, FaGlobe } from 'react-icons/fa';
import './About.css';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      scroller.scrollTo('about', {
        smooth: true,
        offset: -80, // Adjusted for navbar height
        duration: 500,
      });
    }
  }, [location.state]);

  return (
    <div className="about-page">
      <div className="about-header" id="about">
        <p className="page-description">Your Ultimate Movie & TV Series Companion</p>
        <h1 className="page-title">About MovieLens</h1>
      </div>

      <section className="section about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/src/assets/about-page.avif" alt="About Us" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Welcome to MovieLens, your ultimate destination for discovering, reviewing, and rating movies and TV series.
              At MovieLens, we offer a platform where film lovers can explore their favorite titles across different genres.
              With a simple sign-in, users gain access to detailed reviews, personalized ratings, and the option to watch films directly.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><FaFilm /></div>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Movies</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaUsers /></div>
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaStar /></div>
            <div className="stat-number">100,000+</div>
            <div className="stat-label">Reviews</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaGlobe /></div>
            <div className="stat-number">190+</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/m1.jpg" alt="John Smith" />
              </div>
              <h3 className="member-name">John Smith</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">
                Film critic with over 15 years of experience. John founded CineCritic with a vision to create the most trusted movie rating platform.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/m3.png" alt="Sarah Johnson" />
              </div>
              <h3 className="member-name">Sarah Johnson</h3>
              <p className="member-role">Head of Content</p>
              <p className="member-bio">
                Former film journalist with a passion for independent cinema. Sarah ensures that our content is diverse, inclusive, and of the highest quality.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/m2.jpg" alt="Michael Brown" />
              </div>
              <h3 className="member-name">Michael Brown</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-bio">
                Tech enthusiast and movie buff. Michael is responsible for building and maintaining the CineCritic platform.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/src/assets/m4.jpg" alt="Emily Davis" />
              </div>
              <h3 className="member-name">Emily Davis</h3>
              <p className="member-role">Community Manager</p>
              <p className="member-bio">
                Social media expert with a background in film studies. Emily fosters our growing community of movie enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          
          <div className="values-grid">
            <div className="value-item">
              <h3>Honesty</h3>
              <p>
                We believe in authentic, unbiased reviews that help users make informed decisions about what to watch.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Community</h3>
              <p>
                We foster a respectful community where diverse opinions are valued and meaningful discussions can take place.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>
                We celebrate films from all cultures, genres, and perspectives, recognizing the importance of diverse storytelling.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We continuously improve our platform to provide the best possible experience for movie enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 