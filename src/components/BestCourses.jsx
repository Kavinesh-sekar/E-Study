import React from 'react';
import BestSelling from '../utils/BestSelling';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IosShareIcon from '@mui/icons-material/IosShare';
// import '../styles/BestCourses.css';
import '../styles/BestCourse.css';

function BestCourses() {
    return (
        <>
            <div className='best-container'>
                <h3 className='head'> Our Best Courses</h3>
                <h2 className='course'>Best Selling Courses</h2>
                <div className='filter'>
                    <span className='active-filter'>All</span>
                    <span>Graphic Design</span>
                    <span>UI/UX Design</span>
                    <span>Software Development</span>
                    <span>Web Development</span>
                    <span>Photography</span>
                    <span>Audio + Music</span>
                    <span>Digital Marketing</span>
                    <span>3D + Animation</span>
                </div>
                <div className='best-courses-list'>
                    {BestSelling.map((e) => (
                        <div className='best-sell-card' key={e.id}>
                            <img src={e.image} alt={e.title} className='best-img' />
                            <div className='course-details'>
                                <div className='instr'>
                                    <div className='img-name'>
                                        <img src={e.image} alt={e.instructor} className='inst-img' />
                                        <div className='instructor-name'>{e.instructor}</div>
                                    </div>
                                    <div className='share'>
                                        <ShoppingCartIcon />
                                        <StarBorderIcon />
                                        <FavoriteIcon />
                                        <IosShareIcon />

                                    </div>
                                </div>
                                <h4 className='course-title'>{e.title}...</h4>
                                <div className='course-meta'>
                                    <span>{e.lessons}</span>
                                    <span>{e.students}</span>
                                    <span>{e.duration}</span>
                                </div>
                                <hr />
                                <div className='course-footer'>
                                    <span className='course-price'>{e.price}</span>
                                    <span className='course-rating'>{e.rating}</span>
                                    <button className='buy-button'>BUY NOW</button>
                                </div>


                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </>
    );
}

export default BestCourses
