import React from 'react';
import { Container } from 'react-bootstrap';
import { ResumeTitle, ResumeSubTitle, ResumeList} from '../styledComponent/Styled.js';

export const Schools = (props) => {
    return (
        <Container>
            <ResumeTitle>{props.school}</ResumeTitle>
            <ResumeSubTitle>{props.date} : {props.diploma}</ResumeSubTitle>
            <ResumeList>{props.courses}</ResumeList>
        </Container>
    )
};
