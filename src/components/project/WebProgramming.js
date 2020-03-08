import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Title } from '../styledComponent/Styled.js';

export const WebProgramming = (props) => {
    return (
        <div>
            <Container>
                <Title>{props.projectName}</Title>
                <Carousel className="slider d-block mx-auto" style={{backgroundColor: '#17A2b8'}}>
                    <Carousel.Item>
                        <img
                          src={props.srcOne}
                          alt={props.altOne}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          src={props.srcTwo}
                          alt={props.altTwo}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          src={props.srcThree}
                          alt={props.altThree}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container fluid className="pt-5 pb-5">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h6 className="text-center font-weight-bold" style={{color: '#00A651'}}>PROJECT BRIEF</h6>
                        <p className="text-justify">{props.specs}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h6 className="text-center font-weight-bold" style={{color: '#17A2b8'}}>TECHNICAL SKILLS</h6>
                        <ul className="font-italic">{props.skills}</ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
