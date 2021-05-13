import React from 'react';
import contacts from "../../info/contacts.json";
import ContactCard from "../ContactCard";
import { FaPhoneAlt } from 'react-icons/fa';

function Phone() {
  return (
    <div>
      <ContactCard 
        title={contacts[0].title}
        info={contacts[0].info}
        button= {<FaPhoneAlt />}
        link={contacts[0].link}
      />
    </div>
  );
}

export default Phone;