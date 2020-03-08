import React from 'react';
import Octicon, { DeviceMobile } from '@primer/octicons-react';
import { Container, Row, Col } from 'react-bootstrap';

export const Phone = (props) => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col>
                    <Octicon icon={DeviceMobile} size="medium" className="d-block mx-auto" />
                    <p className="text-center font-weight-bold">{props.phone}</p>
                </Col>
            </Row>
        </Container>
    );
}
