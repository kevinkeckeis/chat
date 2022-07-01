import React, { useEffect } from 'react';
import BarContext, { setNavTop } from '../../app/barContext';
import ProjectScope from '../../components/ProjectScope';

const StoriesView = () => {
  const bar = React.useContext(BarContext);
  useEffect(() => {
    setNavTop(bar, 'Stories');
  }, []);

  return <ProjectScope />;
};

export default StoriesView;
