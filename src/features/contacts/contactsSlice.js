import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { createUsers } from '../../utils/usergen';

const initialState = createUsers(35);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addMessage: (state, action) => {},
  },
});

export const { addMessage } = contactsSlice.actions;
export default contactsSlice.reducer;

export const selectContacts = (state) => {
  const contacts = state.contacts.map((contact) => contact);
  const sortedContacts = contacts.sort((a, b) =>
    a.fullname > b.fullname ? 1 : b.fullname > a.fullname ? -1 : 0
  );
  return sortedContacts;
};

export const selectMessagesFromContactById = (id) => (state) => {
  const contact = state.contacts.find((contact) => contact.id === id);
  return contact.messages;
};

export const selectUsersByIds = (arrayIds) => (state) => {
  return arrayIds.map((id) =>
    state.contacts.find((contacts) => id === contacts.id)
  );
};
