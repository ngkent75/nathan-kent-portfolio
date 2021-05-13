import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Project1 from '../../components/Project1';
import Project2 from '../../components/Project2';
import Project3 from '../../components/Project3';
import Footer from '../../components/Footer';

function Projects() {
  return (
    <>

      <h1 align="center">Projects</h1>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row  style={{ margin: 0 }}>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Quirky Quiz</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">PokeBaller</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">MovieFinder</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Future Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Project1 />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Project2 />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Project3 />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div>Here is where future projects will go</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Footer />
    </>
  );
}

export default Projects;