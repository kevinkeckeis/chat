import { configureStore } from '@reduxjs/toolkit';
import chatsSlice from '../features/chats/chatsSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    chats: chatsSlice,
  },
});
