import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBottom from '../components/MenuBottom';
import Navbar from './Navbar';

const LayoutMobil = () => {
  return (
    <div className='md:ph-5 w-full h-screen h-screen-ios md:max-w-screen-lg md:mx-auto flex flex-col'>
      <Navbar />
      <div className='flex-auto overflow-auto overscroll-contain'>
        <Outlet />
      </div>
      <MenuBottom />
    </div>
  );
};

export default LayoutMobil;
