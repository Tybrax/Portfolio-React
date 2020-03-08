import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Title } from '../styledComponent/Styled.js';

export const ComponentTitle = (props) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="d-block mx-auto">
                    <Card style={{ width: '18rem' }} className="shadow-lg d-block mx-auto mb-3">
                        <Card.Body>
                            <Card.Title>
                                <Title>{props.title}</Title>
                            </Card.Title>
                            <Card.Img variant="top" src={props.picture} className="border rounded"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};
