import React from 'react';
import contacts from "../../info/contacts.json";
import ContactCard from "../ContactCard";
import { AiOutlineMail } from 'react-icons/ai';

function Email() {
  return (
    <div>
      <ContactCard 
        title={contacts[1].title}
        info={contacts[1].info}
        button={<AiOutlineMail />}
        link={contacts[1].link}
      />
    </div>
  );
}

export default Email;