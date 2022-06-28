import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const online = () => {
    if (contact.online === 'Online') {
      return <p className='text-sm text-green-900'>{contact.online}</p>;
    } else {
      return <p className='text-sm italic text-gray-700'>{contact.online}</p>;
    }
  };
  return (
    <NavLink to={'/chats/' + contact.id}>
      <li className='p-2 flex hover:bg-slate-200 active:bg-slate-400 transition duration-300'>
        <img
          className='w-14 rounded-full'
          src={contact.picture}
          alt={'a picture from ' + contact.fullname}
        ></img>
        <div className='flex flex-col pl-3'>
          <p className='text-xl font-bold'>{contact.fullname}</p>
          {online()}
        </div>
        <div className=''></div>
      </li>
    </NavLink>
  );
};

export default ContactItem;
