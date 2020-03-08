import React from 'react';

/*import React Bootstrap*/
import { Container } from 'react-bootstrap';

/*import components*/
import { ComponentTitle } from '../componentTitle/ComponentTitle.js';
import { Email } from './Email.js';
import { Phone } from './Phone.js';
import { ContactForm } from './ContactForm.js';

/*import image*/
import bastienImage from '../../images/bastien.jpg';

const contactInfo = {
    email: 'bastien.ratat@gmail.com',
    phone: '07 84 94 53 55'
};

export const Contact = (props) => {
    return (
        <Container>
            <ComponentTitle picture={bastienImage} title="bastien ratat" />
            <p className="contact-headline text-center font-italic font-weight-bold" style={{color: '#17A2b8'}}>Got a question? Send me a message and I'll answer as soon as possible.</p>
            <Email mail={contactInfo.email} />
            <Phone phone={contactInfo.phone} />
            <ContactForm />
        </Container>
    );
};

