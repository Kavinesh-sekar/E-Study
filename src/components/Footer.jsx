import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Courses from './Courses';
import '../styles/Footer.css';
import CallIcon from '@mui/icons-material/Call';


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
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Our Blogs</li>
              <li>Terms & Condition</li>

            </ul>

          </div>

          <div className='foot-contact'>
          <h3>Contact</h3>
            <span><CallIcon /></span>
            <p>+04484548844</p>
            <span> <CallIcon /></span>
            <p>+04484548844</p>
            <span></span>
            <p>Infothemeuser.com</p>
            <span></span>
            <p>123, New Lenox, Chicago</p>

          </div>

          <div className='coach'>
            <h3>Become an Instructor</h3>
            <p>We Only work with the best companies around the globe</p>
            <input type='text'></input>
            <button >Register now</button>

          </div>

        </div>


    </>
  );
}

export default Footer;
