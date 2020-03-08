import React, { useState } from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import { Schools } from './Schools.js';

const eduData = {
        openclassrooms: ['OpenClassrooms', 'Bachelor of Web development', '01/2020 - 01/2021', ['front end', 'back end', 'performance optimization', 'project documentation']],
        lewagon: ['Le Wagon', 'Data Analytics with Python', '11/2019 - 12/2019', ['data sourcing', 'data cleaning', 'data visualization', 'version control']],
        iseg: ['ISEG Business & Finance School', 'Bachelor (equivalent) of International Business', '09/2014 - 07/2015', ['e-economy', 'accounting', 'management', 'finance', 'human ressources']],
        bellevue: ['Assomption Bellevue', 'Two-year Technical Degree in International Business', '09/2012 - 07/2014', ['international business', 'project management', 'law']]
};

const openCourses = eduData.openclassrooms[3].map((course, index) =>
    <li key={index}>
        {course}
    </li>
);

const lewagonCourses = eduData.lewagon[3].map((course, index) =>
    <li key={index}>
        {course}
    </li>
);

const isegCourses = eduData.iseg[3].map((course, index) =>
    <li key={index}>
        {course}
    </li>
);

const bellevueCourses = eduData.bellevue[3].map((course, index) =>
    <li key={index}>
        {course}
    </li>
);

export const Education = (props) => {

    const [titleColor, newColor] = useState('text-dark');

    return (
        <Container>
            <Accordion className="mt-3 mb-3">
                <Card className="shadow-lg">
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="dropdown-btn stretched-link" onMouseOver={() => newColor('text-info')} onMouseOut={() => newColor('text-dark')}>
                            <h4 className={titleColor}>EDUCATION</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Schools school={eduData.openclassrooms[0]} diploma={eduData.openclassrooms[1]} date={eduData.openclassrooms[2]} courses={openCourses} />
                            <Schools school={eduData.lewagon[0]} diploma={eduData.lewagon[1]} date={eduData.lewagon[2]} courses={lewagonCourses} />
                            <Schools school={eduData.iseg[0]} diploma={eduData.iseg[1]} date={eduData.iseg[2]} courses={isegCourses} />
                            <Schools school={eduData.bellevue[0]} diploma={eduData.bellevue[1]} date={eduData.bellevue[2]} courses={bellevueCourses} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
};
