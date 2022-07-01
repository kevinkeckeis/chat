import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated as a, config } from 'react-spring';

import { selectLastMessageByUserId } from '../features/chats/chatsSlice';

const ShortMessageHint = ({ userId }) => {
  // Set a variable for useEffect to avoid animation for initial Load
  const [initial, setInitial] = useState(true);

  const msgLatest = useSelector(selectLastMessageByUserId(userId));

  const msgShort = msgLatest
    ? msgLatest.message.replace(/^(.{200}[^\s]*).*/, '$1')
    : '';

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, color: '#000000' },
  }));

  useEffect(() => {
    if (initial) {
      api.start({
        to: [{ opacity: 0.8, color: '#000000' }],
        from: { opacity: 0, color: '#000000' },
      });
      setInitial(false);
    } else {
      api.start({
        to: [
          { opacity: 1, color: 'rgb(37,99,235)' },
          { opacity: 0.8, color: '#000000' },
        ],
        from: { opacity: 0, color: '#000000' },
        delay: 200,
        config: config.molasses,
      });
    }
  }, [msgShort, api]);

  return (
    <a.div style={styles} className='line-clamp-2 text-sm '>
      {msgShort}
    </a.div>
  );
};

export default ShortMessageHint;
