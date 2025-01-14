import React from 'react'
import './Footer.css'
import fb from '../../assets/fb.png'
import instr from '../../assets/instr.png'
import twtr from '../../assets/twtr.png'

function Footer() {
  return (
    <div className='footer'>
        <p>© 2025 Movie Reviews. All rights reserved. Discover, review, and share your favorite movies with us</p>
        <ul>
            <li><img src={fb} alt="" /></li>
            <li><img src={instr} alt="" /></li>
            <li><img src={twtr} alt="" /></li>
        </ul>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
        
    </div>
  )
}

export default Footer