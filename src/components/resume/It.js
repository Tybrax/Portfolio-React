import React from 'react';
import { Container } from 'react-bootstrap';
import { ResumeTitle, ResumeList } from '../styledComponent/Styled.js';

const skills = {
    webDev: 'HTML, CSS, JavaScript, ReactJS, Bootstrap 4',
    dataSciences:  'Python, Pandas, Numpy, Matplotlib, Seaborn',
    codeManagement: 'Version control system (git)',
    microsoft: 'Microsoft Office',
    design: 'Photoshop, After Effect, Figma'
};

export const It = (props) => {
    return (
        <Container>
            <ResumeTitle>Computer Sciences</ResumeTitle>
            <ResumeList>
                <li>{skills.webDev}</li>
                <li>{skills.dataSciences}</li>
                <li>{skills.codeManagement}</li>
                <li>{skills.microsoft}</li>
                <li>{skills.design}</li>
            </ResumeList>
        </Container>
    )
};
