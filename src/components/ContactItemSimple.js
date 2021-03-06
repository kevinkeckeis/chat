import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUnreadMessagesByUserId } from '../features/chats/chatsSlice';
import ShortMessageHint from './ShortMessageHint';
import UnreadMessageCounter from './UnreadMessageCounter';

const ContactItem = ({ user, style }) => {
  const unreadMessages = useSelector(selectUnreadMessagesByUserId(user.id));

  const online = () => {
    if (user.online === 'Online') {
      return <p className='text-sm text-green-900'>{user.online}asdf</p>;
    } else {
      return <p className='text-sm italic text-gray-700'>{user.online}asdf</p>;
    }
  };
  return (
    <NavLink to={'/chats/' + user.id}>
      <li
        className='p-2 flex hover:bg-slate-200 active:bg-slate-400 transition duration-300 gap-3 items-center'
        style={style}
      >
        <div className='sm:w-16 w-12 flex-none'>
          <img
            className='sm:h-16 h-12 w-full rounded-full'
            src={user.picture}
            alt={'a picture from ' + user.fullname}
          ></img>
        </div>
        <div className='text-xl'>
          {user.first} <strong>{user.last}</strong>
        </div>
      </li>
    </NavLink>
  );
};

export default ContactItem;
