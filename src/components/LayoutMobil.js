import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BarProvider } from '../app/barContext';
import MenuBottom from '../components/MenuBottom';
import TopBar from './TopBar';

const LayoutMobil = (props) => {
  return (
    <div className='md:ph-5 w-full h-screen h-screen-ios md:max-w-screen-lg md:mx-auto flex flex-col'>
      <TopBar title={props.title} barComponent={props.barComponent} />
      <div className='flex-auto overflow-auto overscroll-contain'>
        <Outlet />
      </div>
      <MenuBottom />
    </div>
  );
};

export default LayoutMobil;
