/*import statements*/
import React from 'react';
import { Container } from 'react-bootstrap';
import { Title, mainTitleCompo } from '../styledComponent/Styled.js';

const titleStyle = {
  color: '#17A2b8',
  fontFamily: 'DM Serif Display, serif',
};

export const MainTitle = (props) => {
    return (
        <Container fluid style={titleStyle} className="main-title text-center pt-5 pb-5">
            <h1><mainTitleCompo><span style={{color: '#17A2b8'}}>RATAT</span> <span style={{color: '#00A651'}}>BASTIEN</span></mainTitleCompo></h1>
            <Title color="#343A40">FULL STACK DEVELOPER</Title>
        </Container>
    );
};

