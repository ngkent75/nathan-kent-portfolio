import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';
import { GrDocument } from "react-icons/gr";
import { AiOutlineGithub, AiOutlineDesktop } from 'react-icons/ai';

const ProjectCard = (props) => {
  return (
    <div align="center">
      <h2 className="mt-3 mb-3">{props.title}</h2>
      <img className="mt-3 mb-3" src={props.screenshot} alt="Project Screenshot" width="500" style={{ border: '1px solid black' }} />
      <div className="m-3" align="start">
        <p className="m-3">{props.summary}</p>
      </div>
      <Row>
        <Col className="mt-3 mb-3">
          <a href={props.repo}
            target='_blank'
            rel="noreferrer"
            className='btn buttonstyle btn-outline-dark'
            role='button'
            title='Github Repo'
            align="center">
            < AiOutlineGithub />
          </a>
        </Col>
        <Col className="mt-3 mb-3">
          <a href={props.deployment}
            target='_blank'
            rel="noreferrer"
            className='btn buttonstyle btn-outline-dark'
            role='button'
            title='Deployment'
            align="center">
            < AiOutlineDesktop />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;