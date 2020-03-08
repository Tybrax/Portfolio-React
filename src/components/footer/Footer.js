/*import statements*/
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/*import images*/
import githubLogo from '../../images/github.png';
import linkedinLogo from '../../images/linkedin.png';

export const Footer = (props) => {
    /*component state will change after onMouseOver and onMouseOut are triggered*/
    const [classOne, newclassOne] = useState('center-block');
    const [classTwo, newclassTwo] = useState('center-block');

    return (
        <Container fluid >
            <footer>
                <Row className="justify-content-center pb-3 pt-3">
                    <Col className="align-self-center d-flex justify-content-center">
                                <a href="https://github.com/Tybrax" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} width="130" className={classOne} alt="github" onMouseOver={() => {newclassOne('center-block border-top border-dark rounded-circle')}} onMouseOut={() => {newclassOne('center-block')}} />
                                </a>
                    </Col>
                    <Col className="align-self-center d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/bastien-ratat/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} width="130" className={classTwo} alt="linkedin" onMouseOver={() => {newclassTwo('center-block border-bottom border-dark rounded-circle')}} onMouseOut={() => {newclassTwo('center-block')}} />
                        </a>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
};
