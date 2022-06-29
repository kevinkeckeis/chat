import React from 'react';
import {
  HomeIcon,
  ChatIcon,
  UserGroupIcon,
  UserCircleIcon,
  NewspaperIcon,
} from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const MenuBottom = () => {
  const IconContainerClass =
    'flex flex-col items-center text-gray-500 hover:text-gray-800 w-24 active:text-blue-800';
  const IconContainerClassActive =
    'flex flex-col items-center text-blue-500 hover:text-gray-800 w-24 active:text-blue-800';
  const IconClass = 'h-6 w-6';

  return (
    <div className='flex justify-center bg-gray-100 p-3'>
      <NavLink
        to='/home'
        className={({ isActive }) =>
          isActive ? IconContainerClassActive : IconContainerClass
        }
      >
        <HomeIcon className={IconClass} />
        <p className=''>Home</p>
      </NavLink>
      <NavLink
        to='/chats'
        className={({ isActive }) =>
          isActive ? IconContainerClassActive : IconContainerClass
        }
      >
        <ChatIcon className={IconClass} />
        <p className=''>Chat</p>
      </NavLink>
      <NavLink
        to='/groups'
        className={({ isActive }) =>
          isActive ? IconContainerClassActive : IconContainerClass
        }
      >
        <UserGroupIcon className={IconClass} />
        <p className=''>Groups</p>
      </NavLink>
      <NavLink
        to='/contacts'
        className={({ isActive }) =>
          isActive ? IconContainerClassActive : IconContainerClass
        }
      >
        <UserCircleIcon className={IconClass} />
        <p className=''>Contacts</p>
      </NavLink>
      <NavLink
        to='/stories'
        className={({ isActive }) =>
          isActive ? IconContainerClassActive : IconContainerClass
        }
      >
        <NewspaperIcon className={IconClass} />
        <p className=''>Stories</p>
      </NavLink>
    </div>
  );
};

export default MenuBottom;
