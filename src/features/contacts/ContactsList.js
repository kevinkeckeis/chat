import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import { selectContacts } from './contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  const contactItems = contacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));
  return <ul className='list-none'>{contactItems}</ul>;
};

export default ContactsList;
