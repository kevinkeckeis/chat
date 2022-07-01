import React from 'react';
const BarContext = React.createContext({});
export const BarProvider = BarContext.Provider;
export default BarContext;

export const setNavTop = (navTopContext, title, components = null) => {
  if (navTopContext.title !== title) {
    navTopContext.setTitle(title);
    navTopContext.setBarComponent(components);
  }
};
