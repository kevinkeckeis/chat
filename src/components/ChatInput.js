import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/chats/chatsSlice';
import { createMessage, createRandomMessage } from '../utils/message.gen';

const ChatInput = ({ userId }) => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const delayedAnswer = () => {
    setTimeout(() => {
      const msg = createRandomMessage(userId);
      dispatch(addMessage(msg));
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = createMessage(userId, inputText);
    dispatch(addMessage(msg));
    delayedAnswer();
    setInputText('');
  };

  const inputForm = () => (
    <div className='flex justify-end'>
      <div className='border rounded-lg basis-9/12 flex-initial self-end'>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            type='text'
            className='flex-1 rounded-tl-lg rounded-bl-lg'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
          />
          <button type='button' className='mx-2' onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );

  return <div>{inputForm()}</div>;
};

export default ChatInput;
