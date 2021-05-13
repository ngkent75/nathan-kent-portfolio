import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Phone from '../../components/Phone';
import Email from '../../components/Email';
import LinkedIn from '../../components/LinkedIn';
import Github from '../../components/Github';
import Footer from '../../components/Footer';
import './index.css'

function Contact() {
  return (
    <>
      <h1 align="center" className="mt-5 mb-5">Contact Information</h1>

      <Container>
        <Row className="mt-5 mb-5 mr-0 ml-0">
          <Col md={6} className="mt-5 mb-5">
            <Phone />
          </Col>
          <Col md={6} className="mt-5 mb-5">
            <Email />
          </Col>
        </Row>
        <Row className="mt-5 mb-5 mr-0 ml-0">
          <Col md={6} className="mt-5 mb-5">
            <LinkedIn />
          </Col>
          <Col md={6} className="mt-5 mb-5">
            <Github />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Contact;