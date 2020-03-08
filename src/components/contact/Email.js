import React from 'react';
import Octicon, { Mail } from '@primer/octicons-react';
import { Container, Row, Col } from 'react-bootstrap';

export const Email = (props) => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col>
                    <Octicon icon={Mail} size="medium" className="d-block mx-auto" />
                    <p className="text-center font-weight-bold">{props.mail}</p>
                </Col>
            </Row>
        </Container>
    );
}
