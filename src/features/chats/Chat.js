import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUniqUserIds } from './chatsSlice';

const Chat = () => {
  const contactIds = useParams(selectUniqUserIds);

  return <div></div>;
};

export default Chat;
