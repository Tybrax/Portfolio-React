import React from 'react';
import { Container } from 'react-bootstrap';
import { ResumeTitle, ResumeSubTitle, ResumeList} from '../styledComponent/Styled.js';

export const Jobs = (props) => {
    return (
        <Container>
            <ResumeTitle>{props.company}</ResumeTitle>
            <ResumeSubTitle>{props.date} : {props.title}</ResumeSubTitle>
            <ResumeList>{props.courses}</ResumeList>
        </Container>
    )
};
