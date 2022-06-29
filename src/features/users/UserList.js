import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import { selectUsers } from './usersSlice';

const UserList = () => {
  const users = useSelector(selectUsers);

  const contactItems = users.map((user) => (
    <ContactItem key={user.id} user={user} />
  ));
  return <ul className='list-none'>{contactItems}</ul>;
};

export default UserList;
