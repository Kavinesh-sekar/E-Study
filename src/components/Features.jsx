import React from 'react';
import CardData from '../utils/cardData';
import '../styles/Features.css';

function Features() {
    console.log('dd',CardData);
    
  return (
    <>
      <div className='card-container'>
        {CardData.map((item) => (
             <div className='head' style={{backgroundColor: item.color}}>
          <div className='card' key={item.id}>
            <div className='head' style={{backgroundColor: item.color}}>
            <h3 className='icon-container'>{item.icon}</h3>
            <h3 className='card-title'>{item.title}</h3>
            </div>
            <p className='card-description'>{item.description}</p>
            <a href='#' className='read-more'>
              Read More
            </a>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features
