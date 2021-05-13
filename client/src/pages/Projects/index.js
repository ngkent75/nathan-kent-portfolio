import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Project1 from '../../components/Project1';
import Project2 from '../../components/Project2';
import Project3 from '../../components/Project3';
import Footer from '../../components/Footer';
import './index.css';

function Projects() {
  return (
    <>

      <h1 align="center" className="mt-5 mb-5">Projects</h1>

      <Tabs defaultActiveKey="QuirkyQuiz" id="uncontrolled-tab-example">
        <Tab eventKey="QuirkyQuiz" title="Quirky Quiz">
          <Project1 />
        </Tab>
        <Tab eventKey="PokeBaller" title="PokeBaller">
          <Project2 />
        </Tab>
        <Tab eventKey="MovieFinder" title="MovieFinder">
          <Project3 />
        </Tab>
      </Tabs>

      <Footer />
    </>
  );
}

export default Projects;