import React from 'react';

function ContactCard(props) {
  return (
    <div align="center">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <a href={props.link} target='_blank' rel="noreferrer" className='btn btn-primary' role='button' title='Github Repo'>{props.button} </a>
    </div>
  );
}

export default ContactCard;