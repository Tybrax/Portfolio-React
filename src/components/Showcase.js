import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

// Import images
// Web development - Project 1
import pOneImgOne from './slider/p1_1.JPG';
import pOneImgTwo from './slider/p1_2.JPG';
import pOneImgThree from './slider/p1_3.JPG';

//  Web development - Project 2
import pTwoImgOne from './slider/p2_1.JPG';
import pTwoImgTwo from './slider/p2_2.JPG';
import pTwoImgThree from './slider/p2_3.JPG';

const projectsData = {
    web: {
        pOne: {
            img: [pOneImgOne, pOneImgTwo, pOneImgThree],
            altImg: ['Main page', 'Article page', 'Contact page'],
            name: "Integrate a WordPress theme for a client",
            specs: "Chalets and Caviar, an agency in Aspen, Colorado, has hired you to create their website. In the project, you'll add a dozen chalets total, with a mix of for sale and for rent, a contact page with contact details and a functional contact form, a WordPress theme that makes logical sense for the client's requests.",
            skills: ["Write documentation destined for non-technical users", "Select a WordPress theme based on client needs", "Adapt a WordPress theme to client needs"]
        },
        pTwo: {
            img: [pTwoImgOne, pTwoImgTwo, pTwoImgThree],
            altImg: ['Main page', 'Article page', 'Register form'],
            captionTitle: ['TBD', 'TBD', 'TBD'],
            captionDescription: ['TBD', 'TBD', 'TBD']
        }
    },
    data: {
        img: [],
            altImg: '',
            captionTitle: ['', '', ''],
            captionDescription: ['', '', '']
    }
};

const pOneSkills = projectsData.web.pOne.skills.map((skill) =>
    <li>{skill}</li>
);

const WebProgramming = (props) => {
    return (
        <div>
            <Container>
                <h5 style={{color: '#343A40'}} className="text-center font-weight-bold">WORDPRESS : <span style={{color: '#17A2b8'}}>CHALETS & CAVIAR</span></h5>
                <Carousel className="slider d-block mx-auto">
                    <Carousel.Item>
                        <img
                          src={props.srcOne}
                          alt={props.altOne}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          src={props.srcTwo}
                          alt={props.altTwo}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          src={props.srcThree}
                          alt={props.altThree}
                          className="d-block mx-auto img-fluid"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container fluid>
                <h6 className="text-center font-weight-bold">{props.projectName}</h6>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h6 className="text-center font-weight-bold" style={{color: '#00A651'}}>Project brief</h6>
                        <p>{props.specs}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h6 className="text-center font-weight-bold" style={{color: '#00A651'}}>Technical skills</h6>
                        <ul>{props.skills}</ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const DataSciences = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    Data Scraping
                </Col>
            </Row>
        </Container>
    );
};

export const Showcase = (props) => {
    return(
        <Container>
            <WebProgramming
                srcOne={projectsData.web.pOne.img[0]}
                altOne={projectsData.web.pOne.altImg[0]}

                srcTwo={projectsData.web.pOne.img[1]}
                altTwo={projectsData.web.pOne.altImg[1]}

                srcThree={projectsData.web.pOne.img[2]}
                altThree={projectsData.web.pOne.altImg[2]}

                projectName={projectsData.web.pOne.name}
                specs={projectsData.web.pOne.specs}
                skills={pOneSkills}
            />
        </Container>


    );
};
