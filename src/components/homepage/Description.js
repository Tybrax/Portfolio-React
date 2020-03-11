/*import statement*/
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/*css for the card title*/
const titleStyle = {
    color: '#17A2b8',
    fontFamily: 'DM Serif Display, serif',
    letterSpacing: '2px'
}

/*strings to display in the slider*/
const developerSkills = ['passion', 'communication', 'curiosity', 'rigor', 'creativity'];

export class Description extends React.Component {
    /*component state*/
    constructor(props) {
        super(props);
        this.state = {
            skill: developerSkills[0],
            color: '#00A651'
        };
    }

    /*component have finished loading*/
    componentDidMount() {
        this.interval = setInterval(
            () => this.changeSlide(),
            1500
        );
    }

    /*component will be removed from the DOM*/
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /*change the state every 1.5 seconds*/
    changeSlide() {
        if (this.state.skill === developerSkills[0]) {
            this.setState({
                skill: developerSkills[1],
                color: '#00A651'
            });
        } else if (this.state.skill === developerSkills[1]) {
            this.setState({
                skill: developerSkills[2],
                color: '#00A651'
            });
        } else if (this.state.skill === developerSkills[2]) {
            this.setState({
                skill: developerSkills[3],
                color: '#00A651'
            });
        } else if (this.state.skill === developerSkills[3]) {
            this.setState({
                skill: developerSkills[4],
                color: '#00A651'
            });
        } else if (this.state.skill === developerSkills[4]) {
            this.setState({
                skill: developerSkills[0],
                color: '#00A651'
            });
        }
    }

    render() {
        return (
            <Container fluid className="border-top border-bottom border-black pt-3 pb-5">
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="align-self-center">
                        <figure>
                            <img src={this.props.gif} className="mx-auto d-block rounded-lg border border-black shadow-lg" width="140" height="140" alt="skills slider"/>
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Card className="border rounded-lg shadow">
                        <Card.Title style={titleStyle} className="mt-2 ml-2 pt-2 text-center font-weight-bold">SEEKING FULL-TIME WEB DEVELOPER JOB</Card.Title>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Curious and passionate full-stack developer interested in new challenges, I'm
                                        currently looking for a junior position in Marseille, France.
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

