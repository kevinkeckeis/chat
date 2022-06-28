import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessagesByUserId } from './chatsSlice';
import ChatItem from '../../components/ChatItem';

const Chat = () => {
  const { contactId } = useParams();
  const chatsByUserId = useSelector(selectMessagesByUserId(contactId));

  const chats = chatsByUserId.map((chat) => (
    <ChatItem key={chat.id} chat={chat} />
  ));
  return <div className='flex flex-col'>{chats}</div>;
};

export default Chat;
