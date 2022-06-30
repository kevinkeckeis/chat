import React from 'react';

const UnreadMessageCounter = ({ count }) => {
  return count > 0 ? <div className='text-xs mx-2'>{count} New</div> : null;
};

export default UnreadMessageCounter;
