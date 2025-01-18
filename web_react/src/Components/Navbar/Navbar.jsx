import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo_light from '../../assets/movie_icon_dark.png'
import search_icon_dark from '../../assets/search_icon.png'
import word_icon from '../../assets/word_icon.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return(
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo-container'>
        <img src={logo_light} alt="" className='logo'/>
        <img src={word_icon} alt="" className='word'/>
      </div>
      
      <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={search_icon_dark} alt="" />
      </div>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='movies' smooth={true} offset={-260} duration={500}>Movies</ScrollLink></li>
        <li><ScrollLink to='tv' smooth={true} offset={-260} duration={500}>TV Series</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-100} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500}>Contact Us</ScrollLink></li>
        <li className="auth-links">
          <RouterLink to="/sign" className="nav-sign-link">Sign In</RouterLink>
          
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar

