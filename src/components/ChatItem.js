import React from 'react';
import { selectFullnameByUserId } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

const ChatItem = ({ chat }) => {
  const fullname = useSelector(selectFullnameByUserId(chat.userId));

  const ChatMessageFrom = () => (
    <div className='flex'>
      <div className='m-2 p-2 border rounded-lg basis-9/12'>
        <p className='text-sm font-bold'>{fullname}</p>
        <p className='text-lg float-none'>{chat.message}</p>
        <p className='text-xs italic text-gray-500 float-right'>
          {formatDistance(parseJSON(chat.sendAt), new Date(), {
            addSuffix: true,
          })}
        </p>
        <p>{chat.isRead ? 'read' : 'not read'}</p>
      </div>
    </div>
  );

  const ChatMessageTo = () => (
    <div className='flex justify-end'>
      <div className='m-2 p-2 border rounded-lg basis-9/12 self-end'>
        <p className='text-lg'>{chat.message}</p>
        <p className='text-xs italic text-gray-500 float-right'>
          {formatDistance(parseJSON(chat.sendAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );

  const messages = !chat.isResponse ? <ChatMessageFrom /> : <ChatMessageTo />;

  return <div className=''>{messages}</div>;
};

export default ChatItem;
