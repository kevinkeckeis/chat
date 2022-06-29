import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMessagesByUserId,
  setMessageStatus,
  addMessage,
} from './chatsSlice';
import ChatItem from '../../components/ChatItem';
import ChatInput from '../../components/ChatInput';
import { createRandomMessage } from '../../utils/message.gen';

const Chat = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const chatsByUserId = useSelector(selectMessagesByUserId(userId));

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatsByUserId.length === 0) {
      setTimeout(() => {
        const msg = createRandomMessage(userId);
        dispatch(addMessage(msg));
      }, 1000);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatsByUserId]);

  scrollToBottom();

  const chats = chatsByUserId.map((chat) => (
    <ChatItem key={chat.id} chat={chat} />
  ));
  return (
    <div className='flex flex-col p-3'>
      {chats}
      {<ChatInput userId={userId} />}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Chat;
