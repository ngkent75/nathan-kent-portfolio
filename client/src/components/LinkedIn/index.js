import React from 'react';
import contacts from "../../info/contacts.json";
import ContactCard from "../ContactCard";
import { AiOutlineLinkedin } from 'react-icons/ai';

function LinkedIn() {
  return (
    <div>
      <ContactCard 
        title={contacts[2].title}
        info={contacts[2].info}
        button={<AiOutlineLinkedin />}
        link={contacts[2].link}
      />
    </div>
  );
}

export default LinkedIn;