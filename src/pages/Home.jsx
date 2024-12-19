import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Counts from '../components/Counts';
import BestCourses from '../components/BestCourses';
import Instructors from '../components/Instructors';
import Footer from '../components/Footer';
import Fqa from '../components/Fqa';

function Home() {
  return (
    <>
    
    <Header />
    <div id="hero">
    <HeroSection />
    </div>
    <div id="features">
    <Features />
    </div>
    <div id="courses">
    <Courses />
    </div>
    <div id="courses">
    <Counts />
    </div>
    <div id = 'best'>
    <BestCourses />
    </div>
    <div id="instructors">
    <Instructors />
    </div>
    <div id="fqa">
    <Fqa />
    </div>
    <div id="footer">
    <Footer />
    </div>
   

    </>
    
    
  );
}

export default Home
