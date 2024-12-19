import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Courses from './Courses';
import '../styles/Footer.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Footer() {
  return (
    <>
      <div className='totalFoot'>

        <div className='follow'>

          <h2>E-Skills</h2>
          <p>Pratice based learning platform to enhace skills</p>

          <div className='foot-social'>
            <p>Follow-us</p>
            <span>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            </span>

          </div>
          </div>
          <div className='resources'>
            <h3>Resources</h3>
          
              <p>Home</p>
              <p>Courses</p>
              <p>Our Blogs</p>
              <p>Terms & Condition</p>
             

          

          </div>

          <div className='foot-contact'>
          <h3>Contact</h3>
          <div>
            <span><CallIcon /></span>
            <p>+04484548844</p>
            </div>
            <div>
            <span> <CallIcon /></span>
            <p>+04484548844</p>
            </div>
            <div>
            <span> <EmailIcon /></span>
            <p>Infothemeuser.com</p>
            </div>
            <div>
            <span> <LocationOnIcon /></span>
            <p>123, New Lenox, Chicago</p>
            </div>

          </div>

          <div className='coach'>
            <h3>Become an Instructor</h3>
            <p>We Only work with the best companies around the globe</p>
            <input type='text' placeholder='Enter Your Email' className='search-input-foot'></input>
            <button className='email-send'>Register now</button>

          </div>

        </div>
        <hr className='hr-line'/>

        <div className='bottom'>
          <div className='copyright'>
            <p> © 2023 All rights Terms of user and Privacy and Policy</p> 

          </div>
          <div className='privacy'>
            <p>Privacy |</p>
            <p>Terms | </p>
            <p>SiteMap |</p>
            <p>Purchase </p>
          </div>
          
        </div>


    </>
  );
}

export default Footer;
