import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUsersByIds } from '../users/usersSlice';
import { selectUniqUserIds } from './chatsSlice';
import ContactItem from '../../components/ContactItem';
import BarContext, { setNavTop } from '../../app/barContext';

const ChatList = () => {
  const bar = React.useContext(BarContext);

  useEffect(() => {
    setNavTop(bar, 'Chat');
  }, []);

  const uniqUserIds = useSelector(selectUniqUserIds);
  const users = useSelector(selectUsersByIds(uniqUserIds));

  const contactItems = users.map((user) => (
    <ContactItem key={user.id} user={user} />
  ));
  return <ul className='flex flex-col'>{contactItems}</ul>;
};

export default ChatList;
