import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import Footer from '../../components/Footer';
import { AiOutlineFile } from "react-icons/ai";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col align="center">
            <h1 className="mt-5 mb-5">
              About Me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6} align="center">
            <img src="./assets/Portrait.jpg" alt="Portrait of Me" width="400" align="center" className="mb-5" />
          </Col>
          <Col sm={6} align="center" className='d-flex align-items-center'>
            <div className='about m-3'>
              Hi, my name is Nathan! I am a fresh full-stack web developer who recently graduated from the UNCC coding bootcamp with an A. Outside of coding, I enjoy coaching Pop Warner football, PC building, and playing video games. I really enjoy learning new things, which is part of the reason why I started coding. There's no limit to what you can learn!
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className='bluecard' align='center'>
              <h2 align="center">Hard Skills</h2>


              <p>HTML5</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>jQuery</p>
              <p>Sequelize</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>Session</p>
              <p>Progressive Web Applications</p>
              <p>Handlebars</p>
              <p>React</p>

            </div>
          </Col>
          <Col sm={6}>
            <div align='center'>
              <div className='bluecard'>
                <h2 align="center">Soft Skills</h2>


                <p>Critical Thinking</p>
                <p>Problem Solving</p>
                <p>Communication</p>
                <p>Leadership</p>
                <p>Collaborative</p>
                <p>Self-starting</p>
                <p>Malleable</p>
                <p>Inquisitive</p>

              </div>
              <div>
                <h2 align="center" className='mt-5 mb-5'>Resume</h2>
                <a
                  href="https://drive.google.com/file/d/1JrVDzy6KyqXBKk4a_LX3o_svWrUEgwWe/view?usp=sharing" 
                  target='_blank' 
                  rel="noreferrer" 
                  className='btn buttonstyle btn-outline-dark'
                  role='button'
                  title='Resume'
                  align="center">
                  < AiOutlineFile className='buttoncolor' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default About;