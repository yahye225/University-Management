import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import EngineeringCourseImg from '../../utils/images/eng.jpeg';
import BusinessCourseImg from '../../utils/images/dhaqal.jpeg';
import ComputerScienceCourseImg from '../../utils/images/Com.jpeg';
import EducationCourseImg from '../../utils/images/edo.jpeg';
import HealthcareCourseImg from '../../utils/images/lab.jpeg';
 import LawCourseImg from '../../utils/images/beeraha.jpeg';
// import MusicCourseImg from '../../utils/images/music-course.jpg';
// import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../FaqAccordion/FaqAccordion';


const courses = [
    {
        id: 1,
        img: [EngineeringCourseImg],
        title: 'Foculty Of Engineering',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'

    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: ' Foculty Of Econimc',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: ' Foculty Of Computer Science ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: ' Foculty Of Education ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Foculty Of Medicine',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 6,
        // img: [LawCourseImg],
        img: [HealthcareCourseImg],
        title: ' foculty of farming',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    // {
    //     id: 7,
    //     img: [MusicCourseImg],
    //     title: 'Music Course',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    // },
    // {
        // id: 8,
        // img: [SportCourseImg],
        // title: 'Sport Course',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    // },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-40'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Our courses at Jamhuria University are carefully crafted to provide students with a transformative educational experience that prepares them for success in their chosen fields and beyond. Spanning a diverse array of disciplines including engineering, business, humanities, sciences, and technology, our curriculum combines rigorous academic standards with practical application. Students engage with cutting-edge research, industry-relevant projects, and hands-on learning opportunities that equip them with the skills, knowledge, and critical thinking abilities needed to thrive in today's competitive global landscape.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div >
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;