import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Movies from './Components/Movies/Movies'
import Title from './Components/Title/Title'
import Tv from './Components/Tv/Tv'
import Titletv from './Components/Titletv/Titletv'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Sign from './pages/Sign'
import Movie from './pages/Movie/Movie'
import Tvpage from './pages/Tvpage/Tvpage'



const App = () => {
  return(
    <div className='largecontainer'>
      

    <Router>
    <Navbar/>
      <Routes>
        <Route path="/sign" element={<Sign/>} />
        <Route path="/hero" element={<Hero />} />
        
        <Route path="/" element={
          <div className="container">
            
            <Hero/>
            <div className="container">
              <Title/>
        <Movies />
            </div>
            <div className="container">
              <Titletv subTitle='TV Series Categories to Suit Every Taste' title='Explore TV Series'/>
              <Tv/><About/>
              <Titletv subTitle='Contact Us' title='Getting Touch with Us'/>
              <Contact/>
            </div>
          </div>
        } />
      
      
      <Route path="/Movie/Movie" element={<Movie/>} />
      <Route path="/Tvpage/Tvpage" element={<Tvpage/>} />
 
      </Routes>
      <Footer/>
    </Router>
   
    </div>
  )
}

export default App  