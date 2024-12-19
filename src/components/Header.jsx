import React from 'react';
import '../styles/Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
   <>
    <header className='header'>
      <div className='logo'>Eskills</div>
      <nav className='nav'>
        <ul className='nav-links'>
        <ScrollLink to="hero" smooth={true} duration={500}>
            <li>Home</li>
            </ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500}>
            <li>Courses</li>
            </ScrollLink>
            <ScrollLink to="best" smooth={true} duration={500}>
            <li>Pages</li>
            </ScrollLink>
            <ScrollLink to="instructors" smooth={true} duration={500}>
            <li>Instrctors</li>
            </ScrollLink>
            <ScrollLink to="fqa" smooth={true} duration={500}>
            <li>FQA</li>
            </ScrollLink>
            <ScrollLink to="footer" smooth={true} duration={500}>
            <li>Contact</li>
            </ScrollLink>

        </ul>
      </nav>
      <div className='cards'>
        <PersonIcon />
         <ShoppingCartIcon />
        <button className='myCourse'>Mycourse</button>

      </div>
    </header>

   </>
    
 
  );
}

export default Header
