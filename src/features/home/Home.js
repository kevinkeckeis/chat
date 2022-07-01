import React, { useContext, useEffect } from 'react';
import ProjectScope from '../../components/ProjectScope';
import BarContext, { setNavTop } from '../../app/barContext';

const Home = () => {
  const bar = useContext(BarContext);
  useEffect(() => {
    setNavTop(bar, 'Home');
  }, []);
  return <ProjectScope />;
};

export default Home;
