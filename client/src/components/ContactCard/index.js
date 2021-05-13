import React from 'react';
import './index.css';

function ContactCard(props) {
  return (
    <div align="center">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <a
        href={props.link}
        target='_blank'
        rel="noreferrer"
        className='btn buttonstyle btn-outline-dark p-4 symbol'
        role='button'
        title={props.title}
        align="center">
        {props.button}
      </a>
    </div>
  );
}

export default ContactCard;