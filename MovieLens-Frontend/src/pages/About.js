import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">About MovieLens</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            MovieLens is dedicated to providing movie enthusiasts with a comprehensive platform to discover, 
            explore, and engage with films from around the world. Our mission is to connect people through 
            the shared love of cinema and create a community where everyone's voice matters.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-film feature-icon"></i>
              <h3>Extensive Movie Database</h3>
              <p>Access thousands of movies across all genres, eras, and countries.</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-star feature-icon"></i>
              <h3>User Ratings & Reviews</h3>
              <p>Share your opinions and read what others think about your favorite films.</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-tv feature-icon"></i>
              <h3>TV Series Collection</h3>
              <p>Explore popular and critically acclaimed television series from around the world.</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-users feature-icon"></i>
              <h3>Community</h3>
              <p>Connect with fellow movie lovers and discover new recommendations.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, MovieLens began as a small project by a group of film enthusiasts who wanted 
            to create a better way to discover and discuss movies. What started as a passion project has 
            grown into a vibrant community with users from all over the world.
          </p>
          <p>
            We believe that movies have the power to inspire, educate, and bring people together. Our platform 
            is designed to celebrate the art of filmmaking and provide a space where everyone can share their 
            perspective.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo placeholder"><img src="https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg" alt="" className="member-photo" /></div>
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo placeholder"><img src="https://ysm-res.cloudinary.com/image/upload/c_crop,x_112,y_0,w_2777,h_2777/c_fill,f_auto,q_auto:eco,dpr_3,w_650/v1/yms/prod/4424ae8b-4f64-4333-b410-77287d0b4530" alt="" className="member-photo" /></div>
              <h3>Sarah Johson</h3>
              <p>Head of Content</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo placeholder"><img src="https://imgcdn.stablediffusionweb.com/2024/5/25/4ff995af-d1b3-4975-b89f-405c6944150a.jpg" alt="" className="member-photo" /></div>
              <h3>Emily Johnson</h3>
              <p>Lead Developer</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo placeholder"><img src="https://cdn.shopify.com/s/files/1/0279/6375/2523/files/PhotoRoom_20221228_144238_480x480.png?v=1673982757" alt="" className="member-photo" /></div>
              <h3>Michael Brown</h3>
              <p>UX Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;