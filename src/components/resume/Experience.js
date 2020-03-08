import React, { useState } from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import { Jobs } from './Jobs.js';

const jobExperience = {
        consulate:
            ['Consulate General of France in Chengdu', 'Promotion and alumni officer', '01/2018 - 01/2020', ['Development, management and analysis of the France Alumni members database', 'Deliver beneficial insights for business expansion based on statistical analysis', 'Management of social networks (WeChat, Weibo) and events organization']],
        mango:
            ['Mango Education', 'Co-founder', '05/2017 - 01/2018', ["Administrative procedures with the People's Republic of China authorities", 'Budget management, accounting and local taxation', 'Customer relationship management']]
};

const consulateTasks = jobExperience.consulate[3].map((task, index) =>
    <li key={index}>
        {task}
    </li>
);

const mangoTasks = jobExperience.mango[3].map((task, index) =>
    <li key={index}>
        {task}
    </li>
);

export const Experience = (props) => {

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
    )
};
