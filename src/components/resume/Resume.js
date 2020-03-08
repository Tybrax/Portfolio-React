/*import statements*/
import React from 'react';

/*import components*/
import { Experience } from './Experience.js';
import { Education } from './Education.js';
import { Skills } from './Skills.js';
import { ComponentTitle } from '../componentTitle/ComponentTitle.js';

/*import image*/
import resumeImg from '../../images/resume.jpg';

export const Resume = (props) => {
    return (
        <div className="resume">
            <ComponentTitle picture={resumeImg} title="resume" />
            <Experience />
            <Education />
            <Skills />
        </div>
    )
};
