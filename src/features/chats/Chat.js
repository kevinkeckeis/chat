import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessagesByUserId } from './chatsSlice';
import ChatItem from '../../components/ChatItem';
import ChatInput from '../../components/ChatInput';

const Chat = () => {
  const { contactId } = useParams();
  const chatsByUserId = useSelector(selectMessagesByUserId(contactId));
  const message = useSelector((state) => state.chats);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  scrollToBottom();

  const chats = chatsByUserId.map((chat) => (
    <ChatItem key={chat.id} chat={chat} />
  ));
  return (
    <div className='flex flex-col p-3'>
      {chats}
      {<ChatInput contactId={contactId} />}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Chat;
