import React from 'react';
import HeroImg from '../assets/man.png';
import '../styles/Hero.css';
// import '../styles/Header.css';


function HeroSection() {
  return (
    <section className='hero'>
        <div className='hero-left'>
            <div className='heading'>

          
            <h1 className='inital-text'> Grow your Skills <br></br>
            Build your <span className='change-color'>future</span> </h1>
            <p className='content'>We collaborate to ensure every student acheieve academic,
                 social and emotional sucess by working together and providing comprehensive support</p>

            <div className='start'>
                <button className='started'>Get Started</button>
                <p>Watch Video </p>
            </div>
            </div>
            <div className='search'>
        
            <input type='text' placeholder='course Name' className='search-input' ></input>
            <select className='category-select'>
              <option value={'name'}>All category</option>
            </select>
            <button className='search-button'>search</button>
            </div>

            
        </div>
        <div className='hero-right'> 

        <img 
        className="hero-image"
        src= {HeroImg}
        alt="Hero"
      />

        </div>
    </section>
  );
}

export default HeroSection
