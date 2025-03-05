import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const location = useLocation(); // Get the current location
  const [userData, setUserData] = useState(null);

  const navigate=useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      getData();
    },200)
  }, [location]);

  const getData=async()=>{
    const data = await JSON.parse(sessionStorage.getItem('userData'));
    console.log('useeffct run');
    
    if (data && data.isLoggedIn) {
      setUserData(data.userData);
    }
  }

  const logout=()=>{
    sessionStorage.clear();
    setUserData('');
    navigate('/');
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fa fa-film logo-icon" style={{ fontSize: '30px', marginRight: '10px' }} >
        </i> {/* Replace with a relevant icon */}
          <img src="/path-to-your-image/logo.png" alt="MovieLens" style={{ height: '40px' }} />

      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/movies" className={location.pathname === '/movies' || location.pathname.startsWith('/movie/') ? 'active' : ''}>Movies</Link>
        </li>
        <li>
          <Link to="/tv-series" className={location.pathname === '/tv-series' ? 'active' : ''}>TV Series</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </li>

        {/* Conditional Rendering based on user login status */}
        {userData ? (
          <>
           <li className="navbar-profile">
             <Link to={userData.userType === 'admin' ? '/admin-dashboard' : '/homeScreen'} 
                  className={location.pathname === '/homeScreen' || location.pathname === '/admin-dashboard' ? 'active' : ''} 
                  style={{display:'flex'}}>
             <img 
              src={require('../img1.png')} 
              alt="Profile" 
              className="profile-photo-circle" 
            />
            <span className="username">{userData.name}</span></Link>
          
          </li>
          <li>
          <i className="fas fa-sign-out-alt logo-icon" style={{cursor:'pointer'}} onClick={logout}></i>

          </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login/Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;