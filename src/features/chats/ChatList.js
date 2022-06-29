import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsersByIds } from '../users/usersSlice';
import { selectUniqUserIds } from './chatsSlice';
import ContactItem from '../../components/ContactItem';

const ChatList = () => {
  const uniqUserIds = useSelector(selectUniqUserIds);
  const users = useSelector(selectUsersByIds(uniqUserIds));

  const contactItems = users.map((user) => (
    <ContactItem key={user.id} user={user} />
  ));
  return <ul className='flex flex-col'>{contactItems}</ul>;
};

export default ChatList;
