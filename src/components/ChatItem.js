import React from 'react';
import { selectFullnameByUserId } from '../features/users/usersSlice';
import { useSelector } from 'react-redux';
import {
  formatDistance,
  isSameDay,
  isSameYear,
  differenceInMinutes,
  format,
} from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

const ChatItem = ({ chat }) => {
  const fullname = useSelector(selectFullnameByUserId(chat.userId));

  const sendAt = parseJSON(chat.sendAt);
  const now = new Date();
  const sendAtFormatted = () => {
    if (isSameDay(sendAt, now)) {
      return format(sendAt, 'HH:mm');
    } else if (isSameYear(sendAt, now)) {
      return format(sendAt, 'MM/dd HH:mm');
    } else {
      return format(sendAt, 'MM/dd/yy ');
    }
  };

  const ChatMessageFrom = () => (
    <div className='flex'>
      <div style={{ maxWidth: '75%' }} className='m-2 p-2 border rounded-lg'>
        <div className='flex'>
          <div className='text-sm font-bold flex-auto'>{fullname}</div>
          <div className='text-xs text-gray-400 self-center'>
            {sendAtFormatted()}
          </div>
        </div>
        <p className='text-lg float-none'>{chat.message} </p>
      </div>
    </div>
  );

  const ChatMessageTo = () => (
    <div className='flex justify-end'>
      <div className='m-2 p-2 border rounded-lg self-end'>
        <p className='text-lg'>{chat.message}</p>
        <span className=' float-right text-xs text-gray-400 align-text-bottom pl-3'>
          {sendAtFormatted()}
        </span>
      </div>
    </div>
  );

  const messages = !chat.isResponse ? <ChatMessageFrom /> : <ChatMessageTo />;

  return <div className=''>{messages}</div>;
};

export default ChatItem;
