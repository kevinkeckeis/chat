import React from 'react';

const UnreadMessageCounter = ({ count }) => {
  return count === 1 ? (
    <div className='text-xs mx-2'>{count} New</div>
  ) : count > 1 ? (
    <div className='text-xs mx-2'>{count} New</div>
  ) : null;
};

export default UnreadMessageCounter;
