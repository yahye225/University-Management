import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/com1.jpeg';
import ManchesterLocationImg from '../../utils/images/com2.jpeg';
import LiverpoolLocationImg from '../../utils/images/com3.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Location</h1>
                <p className='text-center w-75 mb-5'>Welcoming the campuses of Jamhuria University is stepping into a dynamic environment designed to inspire and empower students on their academic journeys. Each campus serves as a hub of intellectual curiosity and cultural diversity, offering state-of-the-art facilities and resources that support holistic learning experiences.!</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select defaultValue="London">
                            <option>Compus-One</option>
                            <option>Compus-Two</option>
                            <option>Compus-Three</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control placeholder='Postcode' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div >
             <div className='container'> 
                 <h2 className='text-center mb-5'>Our Locations</h2> 
                 <div className='row g-4'> */}
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h5 className='text-center mt-3'>Bandir:Digfer-raod/Compus-One</h5>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h5 className='text-center mt-3'>Bandir:Kalkaal-raod/Compus-Two</h5>
                    </div>
                    <div className='col-lg-2 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h9 className='text-center mt-3'>Bandir:dahab-Tower-raod/Compus-Three</h9>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact;