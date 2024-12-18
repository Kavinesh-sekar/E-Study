import React from 'react';
import InsOne from '../assets/ins1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Instructor.css';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleIcon from '@mui/icons-material/People';
import InsTwo from '../assets/ins2.png';
import InsThree from '../assets/ins3.png';
import std1 from '../assets/std1.png';
import std2 from '../assets/std2.png';





function Instructors() {


    const data = [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi, quaerat dolore naedse jesjejs eokcce',
            name: 'Marvin Mckineey',
            desgin: 'UI/UX Desgin',
            image: std1
        },
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi, quaerat dolore  Facere commodi, quaerat dolore',
            name: 'Marvin Mckineey',
            desgin: 'UI/UX Desgin',
            image: std2
        }
    ]

    return (
        <>
            <div className='ins-head'>
                <h3>Our Instructor</h3>
                <h2>Meet our Skill Instructors</h2>
            </div>
            <div className='inst-container'>

                <div className='inst-cards'>

                    <div className='img-card'>
                        <img src={InsOne} alt='instOne' className='ins-img' />
                        <div className='social'>
                            <FacebookIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            {/* <vr /> */}
                        </div>
                    </div>

                    <div className='ins-details'>
                        <p>Cameron williason</p>
                        <p className='sub'>Graphic Desginar</p>
                        <hr className='horizontal-border' />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi, quaerat dolore </p>
                        <div className='courseEnro'>

                            <ImportContactsIcon />

                            <span>85 courses</span>

                            <PeopleIcon />
                            <span>1020 students</span>

                        </div>

                    </div>



                </div>
                <div className='inst-cards'>

                    <div className='img-card'>
                        <img src={InsTwo} alt='instOne' className='ins-img' />
                        <div className='social'>
                            <FacebookIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            {/* <vr /> */}
                        </div>
                    </div>

                    <div className='ins-details'>
                        <p>Cameron williason</p>
                        <p className='sub'>Graphic Desginar</p>
                        <hr className='horizontal-border' />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi, quaerat dolore </p>
                        <div className='courseEnro'>

                            <ImportContactsIcon />

                            <span>85 courses</span>

                            <PeopleIcon />
                            <span>1020 students</span>

                        </div>

                    </div>



                </div>

                <div className='inst-cards'>

                    <div className='img-card'>
                        <img src={InsThree} alt='instOne' className='ins-img' />
                        <div className='social'>
                            <FacebookIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            {/* <vr /> */}
                        </div>
                    </div>

                    <div className='ins-details'>
                        <p>Cameron williason</p>
                        <p className='sub'>Graphic Desginar</p>
                        <hr className='horizontal-border' />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi, quaerat dolore </p>
                        <div className='courseEnro'>

                            <ImportContactsIcon />

                            <span>85 courses</span>

                            <PeopleIcon />
                            <span>1020 students</span>

                        </div>

                    </div>



                </div>

            </div>

            <div className='stores'>
                <div className='stories-conten'>
                    <p> Our Students Review</p>
                    <h3>Stores  of <span > Ours Successful </span> Students</h3>
                    <p className='content'> A Learning platform based on prcatical knowledge with best & mentors</p>

                </div>
                <div className='story-card'>
                    {data.map((e) => (
                        <div className='card-content' key={e.id}>
                            {/* <p>{e.content}</p> */}
                            <div className='std-left'>
                                <img src={e.image} className='std-img' alt={e.name} />

                            </div>
                            <div className='std-right'>
                                <p className='changecolor'>  {e.content}</p>
                                <h3>{e.name}</h3>
                                <h6 className='changecolor'>{e.desgin}</h6>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    );
}

export default Instructors;
