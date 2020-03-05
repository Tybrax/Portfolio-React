import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Picture = (props) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="d-block mx-auto">
                    <Card style={{ width: '18rem' }} className="shadow-lg d-block mx-auto mb-3">
                        <Card.Body>
                            <Card.Title>
                                <h5 className="font-weight-bold text-center" style={{color: '#00A651'}}>{props.title.toUpperCase()}</h5>
                            </Card.Title>
                            <Card.Img variant="top" src={props.picture} className="border rounded"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

