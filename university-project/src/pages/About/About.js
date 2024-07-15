import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../Component/ChooseSection/ChooseSection';

import Person1 from '../../utils/images/pic1.jpeg';
import Person2 from '../../utils/images/pic2.jpeg';
import Person3 from '../../utils/images/pic5.jpeg';
import Person4 from '../../utils/images/pic4 - Copy.jpeg';
import Person5 from '../../utils/images/pic3 - Copy.jpeg';
 import Person6 from '../../utils/images/jic.jpeg';
// import Person7 from '../../utils/images/person7.jpg';
// import Person8 from '../../utils/images/person8.jpg';
// import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    // {
    //     id: 7,
    //     img: [Person7]
    // },
    // {
    //     id: 8,
    //     img: [Person8]
    // },
    // {
    //     id: 9,
    //     img: [Person9]
   
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Welcome to the official page of Jamhuria University! We are thrilled to have you join our vibrant online community dedicated to education, innovation, and academic excellence. Here, you will discover a wealth of resources, updates on campus events, and insights into our diverse academic programs designed to empower and inspire our students.  We encourage you to explore, interact, and be part of our journey as we shape the leaders of tomorrow through knowledge and opportunity. Welcome aboard!



            </p>
            </div>
        </header>

        <div className='container my-5'>
            <div >
                {/* <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='text-center fw-semibold text-center w-75 mb-5'>Study with us</h2>
                    <p text-center w-8 mb-5  >At Jamhuria University, embarking on your academic journey means stepping into a world of limitless opportunities and scholarly excellence. Our commitment to fostering a dynamic learning environment is evident in our diverse range of programs tailored to meet the evolving demands of today's industries. Whether you're passionate about engineering, humanities, business, or technology, our dedicated faculty and state-of-the-art facilities ensure a transformative educational experience. Join a community where innovation thrives, ideas flourish, and lifelong connections are made. At Jamhuria University, we invite you to explore, grow, and achieve your fullest potential alongside peers and mentors who share your ambition and drive. Discover your path with us and embark on a journey towards a brighter future.</p>
                   
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div> */}
                {/* <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div> */}
            </div>
        </div>

        <div className='bg-white text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    
              
                    ))}
     
        
        
          </div>
          </div>
          </div>
            </div>
   
  )
}

export default About;