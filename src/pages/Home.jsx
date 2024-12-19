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
    <HeroSection />
    <Features />
    <Courses />
    <Counts />
    <BestCourses />
    <Instructors />
    <Fqa />
    <Footer />
   

    </>
    
    
  );
}

export default Home
