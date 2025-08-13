import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer '>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Founded in 2018, Tomato emerged from a passion for enhancing food delivery experiences with local flair and efficiency. Initially serving one city, it quickly expanded nationwide by 2020, fostering partnerships with renowned restaurants for quality meals. Tomato's intuitive app interface and commitment to prompt service have earned it a reputation for reliability and customer satisfaction. Continuously evolving, Tomato integrates advanced features like real-time order tracking and personalized recommendations, ensuring every meal is a delight. With a focus on connecting communities through culinary excellence, Tomato remains dedicated to redefining convenience in food delivery.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul><li>Home</li>
                <li>About Us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul><li>+92 31255737589</li>
                <li>tomato@gmail.com</li></ul>

            </div>
        </div>
      <hr />
      <div className="footer-copyright">
       <p>Coppright 2027 @tomato.com - All Rights Reserved</p> 
      </div>
    </div>
  )
}

export default Footer
