import React from 'react';
import { selectFullnameByContactId } from '../features/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';

const ChatItem = ({ chat }) => {
  const fullname = useSelector(selectFullnameByContactId(chat.userId));

  const message = () => {
    if (!chat.isResponse) {
      return (
        <div className='flex'>
          <div className='m-2 p-2 border rounded-lg basis-9/12 flex-initial'>
            <p className='text-sm font-bold'>{fullname}</p>
            <p className='text-lg'>{chat.message}</p>
            <p className='text-sm italic text-gray-500'>
              {formatDistance(chat.sendAt, new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='flex justify-end'>
          <div className='m-2 p-2 border rounded-lg basis-9/12 flex-initial self-end'>
            <p className='text-lg'>{chat.message}</p>
            <p className='text-sm italic text-gray-500'>
              {formatDistance(chat.sendAt, new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      );
    }
  };

  return <div className=''>{message()}</div>;
};

export default ChatItem;
