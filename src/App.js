import { Routes, Route, Navigate } from 'react-router-dom';
import LayoutDesktop from './components/LayoutDesktop';
import LayoutMobil from './components/LayoutMobil';
import GroupsList from './features/groups/GroupsList';
import Home from './features/home/Home';
import UserList from './features/users/UserList';
import ChatList from './features/chats/ChatList';
import StoriesView from './features/stories/StoriesView';
import Chat from './features/chats/Chat';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUsers } from './utils/usergen';
import { addUsers } from './features/users/usersSlice';
import { addMessage } from './features/chats/chatsSlice';

import { createRandomMessage } from './utils/message.gen';

function App() {
  const isMobil = true;
  const Layout = () => (isMobil ? <LayoutMobil /> : <LayoutDesktop />);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) dispatch(addUsers(createUsers(100)));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomUserId = Math.floor(Math.random() * users.length);
      const msg = createRandomMessage(users[randomUserId].id);
      dispatch(addMessage(msg));
    }, 7000);

    return () => clearInterval(timer);
  }, [users]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='chats' element={<ChatList />} />
        <Route path='chats/:userId' element={<Chat />} />
        <Route path='groups' element={<GroupsList />} />
        <Route path='contacts' element={<UserList />} />
        <Route path='stories' element={<StoriesView />} />
      </Route>
    </Routes>
  );
}

export default App;
