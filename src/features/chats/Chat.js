import { useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMessagesByUserId,
  addMessage,
  setMessagesRead,
} from './chatsSlice';
import ChatItem from '../../components/ChatItem';
import ChatInput from '../../components/ChatInput';
import { createRandomMessage } from '../../utils/message.gen';
import { selectUserById } from '../users/usersSlice';
import BarContext, { setNavTop } from '../../app/barContext';

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const chatsByUserId = useSelector(selectMessagesByUserId(userId));

  const user = useSelector(selectUserById(userId));

  const bar = useContext(BarContext);
  useEffect(() => {
    setNavTop(bar, user.fullname);
  }, []);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!user) {
      navigate(`/`);
    } else if (chatsByUserId.length === 0) {
      setTimeout(() => {
        const msg = createRandomMessage(userId);
        dispatch(addMessage(msg));
      }, 1000);
    }
  }, []);

  useEffect(() => {
    dispatch(setMessagesRead(userId));
  }, [chatsByUserId]);

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
