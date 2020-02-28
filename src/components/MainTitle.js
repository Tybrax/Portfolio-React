import React from 'react';
import { Container } from 'react-bootstrap';

export const MainTitle = (props) => {
    return (
        <Container fluid style={{backgroundColor: '#F5EAEA'}} className="text-center pt-5 pb-5">
            <h1><span style={{color: '#17a2b8'}}>RATAT</span> <span style={{color: '#00a651'}}>BASTIEN</span></h1>
            <h4 className="font-weight-bold"style={{color: props.firstColor}}>FULL STACK DEVELOPER</h4>
        </Container>
    );
};
