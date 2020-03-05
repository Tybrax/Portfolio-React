/*import statements*/
import React from 'react';
import { Form, Container, Row, Col, Button, Card } from 'react-bootstrap';
/*import the Octicon library for using icons in React */
import Octicon, { Mail, DeviceMobile } from '@primer/octicons-react';
/*import image*/
import bastienImage from '../images/bastien.jpg';

const contactInfo = {
    email: 'bastien.ratat@gmail.com',
    phone: '07 84 94 53 55'
}



const Picture = (props) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="d-block mx-auto">
                    <Card style={{ width: '18rem' }} className="shadow-lg d-block mx-auto mb-3">
                        <Card.Body>
                            <Card.Title>
                                <h5 className="font-weight-bold text-center" style={{color: '#00A651'}}>Bastien RATAT</h5>
                            </Card.Title>
                            <Card.Img variant="top" src={props.picture} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

const Email = (props) => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col>
                    <Octicon icon={Mail} size="medium" className="d-block mx-auto" />
                    <p className="text-center font-weight-bold">{props.mail}</p>
                </Col>
            </Row>
        </Container>
    );
}

const Phone = (props) => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col>
                    <Octicon icon={DeviceMobile} size="medium" className="d-block mx-auto" />
                    <p className="text-center font-weight-bold">{props.phone}</p>
                </Col>
            </Row>
        </Container>
    );
}

const ContactForm = (props) => {
    return (
        <div className="pb-5">
            <h5 className="text-center font-weight-bold" style={{color: '#00A651'}}>Or contact me using the form below</h5>
            <Row>
                <Col className="justify-content-center">
                    <Card className="shadow-lg d-block mx-auto mb-3">
                        <Card.Body>
                            <Form className="contact-form mt-3">
                                <Form.Group>
                                    <Form.Label style={{color: '#17A2b8'}} className="font-weight-bold">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{color: '#17A2b8'}} className="font-weight-bold">Your message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button className= "mx-auto d-block" variant="dark">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export const Contact = (props) => {
    return (
        <div>
            <Picture picture={bastienImage} />
            <p className="contact-headline text-center font-italic font-weight-bold" style={{color: '#17A2b8'}}>Got a question? Send me a message and I'll answer as soon as possible.</p>
            <Email mail={contactInfo.email} />
            <Phone phone={contactInfo.phone} />
            <ContactForm />
        </div>
    );
};

