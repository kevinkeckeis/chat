import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsersByIds } from '../contacts/contactsSlice';
import { selectUniqUserIds } from './chatsSlice';
import ContactItem from '../../components/ContactItem';

const ChatList = () => {
  const uniqUserIds = useSelector(selectUniqUserIds);
  const contacts = useSelector(selectUsersByIds(uniqUserIds));

  const contactItems = contacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));
  return <ul className='flex flex-col'>{contactItems}</ul>;
};

export default ChatList;
