import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export const Contact = (props) => {
    return (
        <div className="contact-header">
            <h5 className="text-center font-weight-bold" style={{color: '#00A651'}} >CONTACT ME</h5>
            <p className="text-center font-italic">Got a question? Send me a message and I'll answer as soon as possible.</p>
            <Row>
                <Col className="justify-content-center">
                    <Form className="contact-form mt-3">
                        <Form.Group>
                            <Form.Label style={{color: '#17A2b8'}} className="font-weight-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{color: '#17A2b8'}} className="font-weight-bold">Your message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="dark">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
};
