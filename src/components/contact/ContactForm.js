import React from 'react';
import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Title } from '../styledComponent/Styled.js';
import { ButtonOverlay } from './ButtonOverlay.js';

export const ContactForm = (props) => {
    return (
        <Container className="pb-5">
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
        </Container>
    )
};
