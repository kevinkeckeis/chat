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

function App() {
  const isMobil = true;
  const Layout = () => (isMobil ? <LayoutMobil /> : <LayoutDesktop />);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) dispatch(addUsers(createUsers(100)));
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
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
