import React from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import '../styles/Fqa.css';

function Fqa() {

    const ques = [
        {
            id:1,
            question:'Do you offer discounts for Students?'
        },
        {
            id:2,
            question:'Do you offer discounts for Big Team?'
        },
        {
            id:3,
            question:'When was the course recored?'
        },
        {
            id:4,
            question:'Did you have refund policy?'
        },
        {
            id:5,
            question:'When was the course recored?'
        },
        {
            id:6,
            question:'what topic includes in that section?'
        }
    ]
  return (
    <>
    <div className='totalFqa'>
    <div className='fqaContent'>
    <h3>FQA</h3>
    <h2>Freuently Asked Questions</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi enim quae consequatur eaque, illo voluptatum oluptatem voluptate soluta?</p>
    </div>
    <div className='question'>
        {ques.map((e)=>(
            <div className='ques-card' key={e.id}>
                <div className='ques-ans'> {e.question}</div>
                <span style={{display:'inline-block'}}><ControlPointIcon /></span>



            </div>
        ))}


    </div>
        <div className='fqa-btn'>
            <button className='get'>Get the Course</button>
            <button className='view'>View the Course</button>


        </div>
    </div>

    <div className='img-banner'>

        <div className='Apply'>
          <div className='apply-content'>
            <div className='whole-content'>
            <div className='sub-content'>
                <h2>Subscribe our NewsLetter</h2>

                <p>Join our newsletter and recevie a kfes capture the content delivered to your inbox every week  </p>
            </div>
            <div>
                <input type='text' className='inputdata' placeholder='Enter Your Email Here' />
                <span> <button className='join' > Join </button></span>
            </div>
            </div>
          </div>
        </div>
    </div>
    
    </>
  );
}

export default Fqa;
