import React, { useState } from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';



const Experience = (props) => {

    const [titleColor, newColor] = useState('text-dark');

    const jobExperience = {
        consulate:
            ['Consulate General of France in Chengdu', 'Promotion and alumni officer', '01/2018 - 01/2020', ['Development, management and analysis of the France Alumni members database', 'Deliver beneficial insights for business expansion based on statistical analysis', 'Management of social networks (WeChat, Weibo) and events organization']],
        mango:
            ['Mango Education', 'Co-founder', '05/2017 - 01/2018', ["Administrative procedures with the People's Republic of China authorities", 'Budget management, accounting and local taxation', 'Customer relationship management']]
    }

    const consulateTasks = jobExperience.consulate[3].map((task) =>
        <li>{task}</li>
    );

    const mangoTasks = jobExperience.mango[3].map((task) =>
        <li>{task}</li>
    );

    return (
        <Container>
            <Accordion className="mt-3 mb-3">
                <Card className="shadow-lg">
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="dropdown-btn stretched-link" onMouseOver={() => newColor('text-info')} onMouseOut={() => newColor('text-dark')}>
                            <h4 className={titleColor}>PROFESSIONAL EXPERIENCE</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h5>{jobExperience.consulate[0]}</h5>
                            <h6>{jobExperience.consulate[2]} : {jobExperience.consulate[1]}</h6>
                            <ul>{consulateTasks}</ul>
                            <h5>{jobExperience.mango[0]}</h5>
                            <h6>{jobExperience.mango[2]} : {jobExperience.mango[1]}</h6>
                            <ul>{mangoTasks}</ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );

};

export const Resume = (props) => {
    return (
        <Experience />
    )
};
