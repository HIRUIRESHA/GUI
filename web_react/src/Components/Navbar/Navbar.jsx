import React, { useEffect,useState } from 'react'
import './Navbar.css'
import logo_light from '../../assets/movie_icon_dark.png'
import search_icon_dark from '../../assets/search_icon.png'
import word_icon from '../../assets/word_icon.png'
import favorite_icon from '../../assets/favorite_icon.png'
import word_icon_light from '../../assets/word_icon_light.png'
import menu_icon from '../../assets/menu_icon.png'
import { Link, ScrollLink } from 'react-scroll'
 


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[] );

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return(
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>

      <div className='logo-container'>
          <img src = {logo_light}  alt = "" className = 'logo'/>
          <img src = {word_icon}  alt = "" className = 'word'/>
      </div>
      
      
   <div className = 'search-box'>
        <input type = "text" placeholder = 'Search'/>
        <img src = {search_icon_dark} alt = "" />

      </div>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>

        <li><Link to = 'hero' smooth = {true} offset = {0} duration={500}>Home</Link> </li>
        <li><Link to = 'movies' smooth = {true} offset = {-260} duration={500}>Movies</Link></li>
        <li><Link to = 'tv' smooth = {true} offset = {-260} duration={500}>TV Series</Link></li>
        <li><Link to = 'about' smooth = {true} offset = {-100} duration={500}>About Us</Link></li>
        <li><Link to = 'contact' smooth = {true} offset = {-260} duration={500}>Contact Us</Link></li>
        <li>Sign In</li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />

{/*<img src = {favorite_icon}  alt = "" className = 'favorite'/>*/}

      
    </nav>
  )
}

export default Navbar

