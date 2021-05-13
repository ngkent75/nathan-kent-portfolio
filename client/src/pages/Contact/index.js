import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Phone from '../../components/Phone';
import Email from '../../components/Email';
import LinkedIn from '../../components/LinkedIn';
import Github from '../../components/Github';
import Footer from '../../components/Footer';

function Contact() {
  return (
    <>
      <h1 align="center">Contact Information</h1>

      <Container>
        <Row>
          <Col><Phone /></Col>
          <Col><Email /></Col>
        </Row>
        <Row>
          <Col><LinkedIn /></Col>
          <Col><Github /></Col>
        </Row>
      </Container>
      
      <Footer />
    </>
  );
}

export default Contact;