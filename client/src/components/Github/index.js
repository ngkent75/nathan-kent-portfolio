import React from 'react';
import contacts from "../../contacts.json";
import ContactCard from "../ContactCard";
import { AiOutlineGithub } from 'react-icons/ai';

function Github() {
  return (
    <div>
      <ContactCard 
        title={contacts[3].title}
        info={contacts[3].info}
        button={<AiOutlineGithub />}
        link={contacts[3].link}
      />
    </div>
  );
}

export default Github;