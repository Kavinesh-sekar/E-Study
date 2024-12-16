import React from 'react';
import '../styles/Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
   <>
    <header className='header'>
      <div className='logo'>Eskills</div>
      <nav className='nav'>
        <ul className='nav-links'>
            <li>Home</li>
            <li>Courses</li>
            <li>Pages</li>
            <li>Instrctors</li>
            <li>Blog</li>
            <li>Contact</li>
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
