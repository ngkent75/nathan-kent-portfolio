import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import Footer from '../../components/Footer';

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col align="center">
            <h1>
              About Me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6} align="center">
            <img src="./assets/Portrait.jpg" alt="Portrait of Me" width="400" align="center" className="mb-5" />
          </Col>
          <Col sm={6} align="center" className='d-flex align-items-center'>
            <div className='about'>
              Hi, my name is Nathan! I am a fresh full-stack web developer who recently graduated from the UNCC coding bootcamp with an A. Outside of coding, I enjoy coaching Pop Warner football, PC building, and playing video games. I really enjoy learning new things, which is part of the reason why I started coding. There's no limit to what you can learn!
            </div>
          </Col>
        </Row>
        <Row >
          <Col sm={6}>
            <div className='bluecard'>
              <h2 align="center">Hard Skills</h2>

              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Session</li>
                <li>Progressive Web Applications</li>
                <li>Handlebars</li>
                <li>React</li>
              </ul>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <div className='bluecard'>
                <h2 align="center">Soft Skills</h2>

                <ul>
                  <li>Critical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Collaborative</li>
                  <li>Self-starting</li>
                  <li>Malleable</li>
                  <li>Inquisitive</li>
                </ul>
              </div>
              <a href="https://drive.google.com/file/d/1GgFXAZCGroPbxsTKXRKMDh7Xn0fU8wgu/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default About;