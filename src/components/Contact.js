/*import statements*/
import React from 'react';
import { Picture } from './Picture.js';
import { Form, Container, Row, Col, Card, Popover, OverlayTrigger } from 'react-bootstrap';
/*import the Octicon library for using icons in React */
import Octicon, { Mail, DeviceMobile } from '@primer/octicons-react';
/*import image*/
import bastienImage from '../images/bastien.jpg';
import { Button, Title } from './Styled.js';

const contactInfo = {
    email: 'bastien.ratat@gmail.com',
    phone: '07 84 94 53 55'
};

const submitMessage = (
  <Popover id="popover-basic">
    <Popover.Title>
        <h3 className="text-center">Form submitted</h3>
    </Popover.Title>
    <Popover.Content>
        <p className="text-justify">I already received your message and will answer you as soon as possible</p>
        <Title>Bastien RATAT</Title>
    </Popover.Content>
  </Popover>
);

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

const ButtonOverlay = (props) => {
    return (
        <OverlayTrigger variant="dark" trigger="click" placement="bottom" overlay={submitMessage}>
            <Button className= "mx-auto d-block">Submit</Button>
        </OverlayTrigger>
    )
};

const ContactForm = (props) => {
    return (
        <div className="pb-5">
            <Title textDowncase="lowercase">Or contact me using the form below</Title>
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
                                <ButtonOverlay />
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
            <Picture picture={bastienImage} title="bastien ratat" />
            <p className="contact-headline text-center font-italic font-weight-bold" style={{color: '#17A2b8'}}>Got a question? Send me a message and I'll answer as soon as possible.</p>
            <Email mail={contactInfo.email} />
            <Phone phone={contactInfo.phone} />
            <ContactForm />
        </div>
    );
};

