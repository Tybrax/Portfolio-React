import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { It } from './It.js';
import { Languages } from './Languages.js';

export const Skills = (props) => {

    const [titleColor, newColor] = useState('text-dark');

    return (
        <Container>
            <Accordion className="mt-3 mb-3">
                <Card className="shadow-lg">
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="dropdown-btn stretched-link" onMouseOver={() => newColor('text-info')} onMouseOut={() => newColor('text-dark')}>
                            <h4 className={titleColor}>SKILLS</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card.Body>
                                    <It />
                                </Card.Body>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card.Body>
                                    <Languages />
                                </Card.Body>
                            </Col>
                        </Row>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
};
