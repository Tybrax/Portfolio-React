import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { ResumeTitle, LanguageList} from '../styledComponent/Styled.js';

export const Languages = (props) => {
    return (
        <Container>
            <ResumeTitle>Languages</ResumeTitle>
            <LanguageList>
                <li className="mt-2 mb-2">French<ProgressBar variant='dark' now={100} /></li>
                <li className="mt-2 mb-2">English (TOEIC 935/990)<ProgressBar variant='dark' now={90} /></li>
                <li className="mt-2 mb-2">Chinese (HSK5)<ProgressBar variant='dark' now={90} /></li>
                <li className="mt-2 mb-2">Spanish<ProgressBar variant='dark' now={40} /></li>
            </LanguageList>
        </Container>
    )
};
