import React from 'react'
import Users from '../utils/Users';
import '../styles/Counts.css';

function Counts() {

    console.log('ffffff',Users)
  return (
   <>
   <div className='count-container'>
    
    {Users.map((e)=>(
        <div className='user-container' key={e.key}>
        <div className='users-name' > {e.role}       </div>
        <div className='users-couunt' > {e.count}       </div>

        </div>
    ))}

   </div>
   </>
  );
}

export default Counts
