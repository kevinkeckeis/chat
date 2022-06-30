import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUnreadMessagesByUserId } from '../features/chats/chatsSlice';
import ShortMessageHint from './ShortMessageHint';

const ContactItem = ({ user }) => {
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
      <li className='p-2 flex hover:bg-slate-200 active:bg-slate-400 transition duration-300 gap-3'>
        <div className='w-16 flex-none'>
          <img
            className='h-16 w-full rounded-full'
            src={user.picture}
            alt={'a picture from ' + user.fullname}
          ></img>
        </div>
        <div className='flex flex-col'>
          <p className='text-xl font-bold'>{user.fullname}</p>
          <ShortMessageHint userId={user.id} />
          {/* {online()} */}
        </div>
        <div></div>

        <div className=''>{unreadMessages.length}</div>
      </li>
    </NavLink>
  );
};

export default ContactItem;
