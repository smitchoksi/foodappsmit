import React from 'react'
import "../Footer/Footer.css"
import { Container, Row, Col} from 'react-bootstrap';
import { assets } from '../../assets/assets'

const Footer = () => {
    
    return (
    <>
      <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo1' src={assets.logo} alt="" />
            <h3 className='followuson'>Follow Us On :</h3>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-937-441-8071</li>
                <li>Smitchoksi219@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Foodapp.com - All Right Reserved.
      </p>
    </div>

   
    </>
  
  )
}

export default Footer


