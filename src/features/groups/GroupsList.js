import React, { useEffect } from 'react';
import BarContext, { setNavTop } from '../../app/barContext';
import ProjectScope from '../../components/ProjectScope';

const GroupsList = () => {
  const bar = React.useContext(BarContext);
  useEffect(() => {
    setNavTop(bar, 'Groups');
  }, []);

  return <ProjectScope />;
};

export default GroupsList;
