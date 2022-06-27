import { Routes, Route, Navigate } from 'react-router-dom';
import LayoutDesktop from './components/LayoutDesktop';
import LayoutMobil from './components/LayoutMobil';
import GroupsList from './features/groups/GroupsList';
import Home from './features/home/Home';
import ContactsList from './features/contacts/ContactsList';
import ChatList from './features/chats/ChatList';
import StoriesView from './features/stories/StoriesView';
import Chat from './features/chats/Chat';

function App() {
  const isMobil = true;
  const Layout = () => (isMobil ? <LayoutMobil /> : <LayoutDesktop />);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='chats' element={<ChatList />} />
        <Route path='chats/:contactId' element={<Chat />} />
        <Route path='groups' element={<GroupsList />} />
        <Route path='contacts' element={<ContactsList />} />
        <Route path='stories' element={<StoriesView />} />
      </Route>
    </Routes>
  );
}

export default App;
