import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const developerSkills = ['passion', 'communication', 'curiosity', 'rigor', 'creativity'];
const colors = ['#00A651', '#5B8C5A', '#21BF73', '#52DE97', '#CCDA46'];

export class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: developerSkills[0],
            color: colors[0]
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.changeSlide(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeSlide() {
        if (this.state.skill === developerSkills[0]) {
            this.setState({
                skill: developerSkills[1],
                color: colors[1]
            });
        } else if (this.state.skill === developerSkills[1]) {
            this.setState({
                skill: developerSkills[2],
                color: colors[2]
            });
        } else if (this.state.skill === developerSkills[2]) {
            this.setState({
                skill: developerSkills[3],
                color: colors[3]
            });
        } else if (this.state.skill === developerSkills[3]) {
            this.setState({
                skill: developerSkills[4],
                color: colors[4]
            });
        } else if (this.state.skill === developerSkills[4]) {
            this.setState({
                skill: developerSkills[0],
                color: colors[0]
            });
        }
    }

    render() {
        return (
            <Container fluid className="border-top border-bottom border-black pt-3 pb-3">
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <figure>
                            <img src={this.props.logoBlack} className="mx-auto d-block" width="200" height="200"/>
                            <figcaption className="text-center font-italic font-weight-bold" style={{color: this.props.quoteColor}}>Unleash the power of web programming</figcaption>
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Card className="border rounded-lg shadow">
                        <Card.Title className="mt-2 ml-2 pt-2 text-center">SEEKING FULL-TIME WEB DEVELOPER JOB</Card.Title>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Curious and passionate full-stack developer interested in new challenges, I'm
                                        currently looking for a position in Marseille, France.
                                    </p>
                                    <h4 className="skills text-center" style={{color: this.state.color}}>
                                        {this.state.skill.toUpperCase()}
                                    </h4>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

