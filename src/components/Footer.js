// IMPORT
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';

export const Footer = (props) => {

    const [classOne, newclassOne] = useState('center-block');
    const [classTwo, newclassTwo] = useState('center-block');

    return (
        <Container fluid >
            <footer>
                <Row>
                    <Col className="align-self-center">
                        <a href="https://github.com/Tybrax" target="_blank">
                            <img src={githubLogo} width="150" className={classOne} onMouseOver={() => {newclassOne('center-block border border-dark rounded-circle')}} onMouseOut={() => {newclassOne('center-block')}} />
                        </a>
                    </Col>
                    <Col className="align-self-center">
                        <a href="https://www.linkedin.com/in/bastien-ratat/" target="_blank">
                            <img src={linkedinLogo} width="150" className={classTwo} onMouseOver={() => {newclassTwo('center-block border border-dark rounded-circle')}} onMouseOut={() => {newclassTwo('center-block')}} />
                        </a>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
};
