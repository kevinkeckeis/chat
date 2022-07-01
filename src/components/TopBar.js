import React from 'react';
import BarContext from '../app/barContext';

const TopBar = ({ title, barComponent }) => {
  return (
    <div className='flex-none flex bg-gray-100 p-2'>
      <h1 className='text-2xl flex-none'>{title}</h1>
      <div className='flex-auto'>{barComponent}</div>
    </div>
  );
};

export default TopBar;
