import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLastMessageByUsers } from './chatsSlice';
import ContactItem from '../../components/ContactItem';
import BarContext, { setNavTop } from '../../app/barContext';
import { useTransition, animated as a, config } from 'react-spring';
import { compareDesc, parseJSON } from 'date-fns';

const ChatList = () => {
  const bar = React.useContext(BarContext);

  useEffect(() => {
    setNavTop(bar, 'Chat');
  }, []);

  const usersLastMessage = useSelector(selectLastMessageByUsers());
  usersLastMessage.sort((a, b) => {
    return compareDesc(
      parseJSON(a.newestMsgSendAt),
      parseJSON(b.newestMsgSendAt)
    );
  });

  const height = 75;
  const usersLastMessageCords = usersLastMessage.map((users, i) => ({
    ...users,
    y: i * height,
  }));

  const transitions = useTransition(usersLastMessageCords, {
    from: { opacity: 0, position: 'absolute' },
    enter: ({ y }) => ({ y, opacity: 1 }),
    update: ({ y }) => ({ y }),
    leave: { opacity: 0 },
    keys: (usersLastMessage) => usersLastMessage.id,
    config: config.molasses,
  });

  const elems = transitions((style, user, t, i) => {
    return (
      <a.div style={style}>
        <ContactItem key={user.id} user={user} />{' '}
      </a.div>
    );
  });

  return <div className='relative'>{elems}</div>;
};

export default ChatList;
