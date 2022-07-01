import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBottom from '../components/MenuBottom';
import TopBar from './TopBar';

const LayoutDesktop = () => {
  return (
    <div className='md:ph-5 w-full h-screen md:max-w-screen-lg md:mx-auto flex flex-col'>
      <TopBar />
      <div className='flex-auto'>
        <Outlet />
      </div>
      <MenuBottom />
    </div>
  );
};

export default LayoutDesktop;
