import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Movies from './Components/Movies/Movies'
import Title from './Components/Title/Title'
import Tv from './Components/Tv/Tv'
import Titletv from './Components/Titletv/Titletv'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {


  return(
    <div className = 'container'>
      <Navbar/>
      <Hero/>
      <div className = "container">
      <Title/><Movies/>
      </div>
      <div className = "container">
        <Titletv subTitle = 'TV Series Categories to Suit Every Taste' title = 'Explore TV Series'/>
        <Tv/><About/>
        <Titletv subTitle = 'Contact Us' title = 'Getting Touch with Us'/>
        <Contact/><Footer/>

        
      </div>

      
    </div>
  )
}

export default App