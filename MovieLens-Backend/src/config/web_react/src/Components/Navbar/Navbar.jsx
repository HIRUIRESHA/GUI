import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../assets/movie_icon_dark.png';
import search_icon_dark from '../../assets/search_icon.png';
import word_icon from '../../assets/word_icon.png';
import menu_icon from '../../assets/menu_icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(null);
  const [activeLink, setActiveLink] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Add scroll event listener for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link based on the current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveLink('hero');
    else if (path.includes('movies')) setActiveLink('movies');
    else if (path.includes('tv')) setActiveLink('tv');
    else if (path.includes('about')) setActiveLink('about');
    else if (path.includes('contact')) setActiveLink('contact');
    else if (path.includes('sign')) setActiveLink('sign');
    else setActiveLink('');
  }, [location.pathname]);

  // Check authentication status
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, [location.pathname]);

  // Handle navigation and scrolling logic
  const handleScrollOrNavigate = (sectionId) => {
    setActiveLink(sectionId);
    if (location.pathname === '/') {
      scroller.scrollTo(sectionId, {
        smooth: true,
        offset: sectionId === 'hero' ? 0 : -260,
        duration: 500,
      });
    } else {
      setScrollToSection(sectionId);
      navigate('/');
    }
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        <img src={logo_light} alt="Logo" className="logo" />
        <img src={word_icon} alt="Word Icon" className="word" />
      </div>
      
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li className={activeLink === 'hero' ? 'active-link' : ''} onClick={() => handleScrollOrNavigate('hero')}>
          Home
        </li>
        <li className={activeLink === 'movies' ? 'active-link' : ''} onClick={() => handleScrollOrNavigate('movies')}>
          Movies
        </li>
        <li className={activeLink === 'tv' ? 'active-link' : ''} onClick={() => handleScrollOrNavigate('tv')}>
          TV Series
        </li>
        <li className={activeLink === 'about' ? 'active-link' : ''} onClick={() => handleScrollOrNavigate('about')}>
          About Us
        </li>
        <li className={activeLink === 'contact' ? 'active-link' : ''} onClick={() => handleScrollOrNavigate('contact')}>
          Contact Us
        </li>
        {!isAuthenticated && (
          <li className="auth-links">
            <RouterLink to="/sign" className="nav-sign-link">
              Sign In
            </RouterLink>
          </li>
        )}
      </ul>
      
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;