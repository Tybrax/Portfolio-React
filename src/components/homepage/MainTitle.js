/*import statements*/
import React from 'react';
import { Container } from 'react-bootstrap';
import { Title } from '../styledComponent/Styled.js';

export const MainTitle = (props) => {
    return (
        <Container fluid style={{backgroundColor: '#F5EAEA'}} className="main-title text-center pt-5 pb-5">
            <h1><span style={{color: '#17a2b8'}}>RATAT</span> <span style={{color: '#00a651'}}>BASTIEN</span></h1>
            <Title color="#343A40">FULL STACK DEVELOPER</Title>
        </Container>
    );
};
