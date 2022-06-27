import { configureStore } from '@reduxjs/toolkit';
import chatsSlice from '../features/chats/chatsSlice';
import contactsSlice from '../features/contacts/contactsSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice, chats: chatsSlice },
});
