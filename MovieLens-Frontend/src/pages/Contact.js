import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <div>
              <h3>Our Location</h3>
              <p>123 Movie Street, Hollywood, CA 90210</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-phone-alt contact-icon"></i>
            <div>
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <div>
              <h3>Email Address</h3>
              <p>info@movielens.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-clock contact-icon"></i>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>
          
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
              
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
              
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
              
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
              
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;