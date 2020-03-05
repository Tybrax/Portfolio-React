/*import statements*/
import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';

/*declare variables*/
const eduData = {
        openclassrooms: ['OpenClassrooms', 'Bachelor of Web development', '01/2020 - 01/2021', ['front end', 'back end', 'performance optimization', 'project documentation']],
        lewagon: ['Le Wagon', 'Data Analytics with Python', '11/2019 - 12/2019', ['data sourcing', 'data cleaning', 'data visualization', 'version control']],
        iseg: ['ISEG Business & Finance School', 'Bachelor (equivalent) of International Business', '09/2014 - 07/2015', ['e-economy', 'accounting', 'management', 'finance', 'human ressources']],
        bellevue: ['Assomption Bellevue', 'Two-year Technical Degree in International Business', '09/2012 - 07/2014', ['international business', 'project management', 'law']]
    };

const openCourses = eduData.openclassrooms[3].map((course) =>
    <li>{course}</li>
);

const lewagonCourses = eduData.lewagon[3].map((course) =>
    <li>{course}</li>
);

const isegCourses = eduData.iseg[3].map((course) =>
    <li>{course}</li>
);

const bellevueCourses = eduData.bellevue[3].map((course) =>
    <li>{course}</li>
);

const jobExperience = {
        consulate:
            ['Consulate General of France in Chengdu', 'Promotion and alumni officer', '01/2018 - 01/2020', ['Development, management and analysis of the France Alumni members database', 'Deliver beneficial insights for business expansion based on statistical analysis', 'Management of social networks (WeChat, Weibo) and events organization']],
        mango:
            ['Mango Education', 'Co-founder', '05/2017 - 01/2018', ["Administrative procedures with the People's Republic of China authorities", 'Budget management, accounting and local taxation', 'Customer relationship management']]
    };

const consulateTasks = jobExperience.consulate[3].map((task) =>
    <li>{task}</li>
);

const mangoTasks = jobExperience.mango[3].map((task) =>
    <li>{task}</li>
);

const skills = {
    it: {
        webDev: 'HTML, CSS, JavaScript, ReactJS, Bootstrap 4',
        dataSciences:  'Python, Pandas, Numpy, Matplotlib, Seaborn',
        codeManagement: 'Version control system (git)',
        microsoft: 'Microsoft Office',
        design: 'Photoshop, After Effect, Figma'
    },
    languages: ['French : native', 'English : full (TOEIC 935/990)', 'Chinese : full (HSK5)', 'Spanish : intermediate']
};

/*declare components*/

const Picture = () => {

};

const Jobs = (props) => {
    return (
        <div>
            <h5 className="font-weight-bold" style={{color: '#00A651'}}>{props.company}</h5>
            <h6 className="font-italic" style={{color: '#17A2b8'}}>{props.date} : {props.title}</h6>
            <ul className="text-dark">{props.courses}</ul>
        </div>
    )
}

const Schools = (props) => {
    return (
        <div>
            <h5 className="font-weight-bold" style={{color: '#00A651'}}>{props.school}</h5>
            <h6 className="font-italic" style={{color: '#17A2b8'}}>{props.date} : {props.diploma}</h6>
            <ul className="text-dark">{props.courses}</ul>
        </div>
    );
}

const It = (props) => {
    return (
        <div>
            <h5 className="font-weight-bold" style={{color: '#00A651'}}>Computer Sciences</h5>
            <ul className="text-dark">
                <li>{skills.it.webDev}</li>
                <li>{skills.it.dataSciences}</li>
                <li>{skills.it.codeManagement}</li>
                <li>{skills.it.microsoft}</li>
                <li>{skills.it.design}</li>
            </ul>
        </div>
    );
}

const Languages = (props) => {
    return (
        <div>
            <h5 className="font-weight-bold" style={{color: '#00A651'}}>Languages</h5>
            <ul className="text-dark">

                <li className="mt-2 mb-2">French<ProgressBar variant='dark' now={100} /></li>
                <li className="mt-2 mb-2">English (TOEIC 935/990)<ProgressBar variant='dark' now={90} /></li>
                <li className="mt-2 mb-2">Chinese (HSK5)<ProgressBar variant='dark' now={90} /></li>
                <li className="mt-2 mb-2">Spanish<ProgressBar variant='dark' now={40} /></li>
            </ul>
        </div>
    );
};

const Skills = (props) => {

    const [titleColor, newColor] = useState('text-dark');

    return (
        <Container>
            <Accordion className="mt-3 mb-3">
                <Card className="shadow-lg">
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="dropdown-btn stretched-link" onMouseOver={() => newColor('text-info')} onMouseOut={() => newColor('text-dark')}>
                            <h4 className={titleColor}>SKILLS</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card.Body>
                                    <It />
                                </Card.Body>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card.Body>
                                    <Languages />
                                </Card.Body>
                            </Col>
                        </Row>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
}

const Education = (props) => {

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
    );
};

const Experience = (props) => {

    const [titleColor, newColor] = useState('text-dark');

    return (
        <Container className="mt-5">
            <Accordion className="mt-5 mb-3">
                <Card className="shadow-lg mt-5">
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="dropdown-btn stretched-link mt-3" onMouseOver={() => newColor('text-info')} onMouseOut={() => newColor('text-dark')}>
                            <h4 className={titleColor}>PROFESSIONAL EXPERIENCE</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Jobs company={jobExperience.consulate[0]} title={jobExperience.consulate[1]} date={jobExperience.consulate[2]} courses={consulateTasks}/>
                            <Jobs company={jobExperience.mango[0]} title={jobExperience.mango[1]} date={jobExperience.mango[2]} courses={mangoTasks}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );

};

export const Resume = (props) => {
    return (
        <div className="resume">
            <h5 className="text-center font-weight-bold" style={{color: '#00A651'}}>RESUME</h5>
            <Experience />
            <Education />
            <Skills />
        </div>
    )
};
