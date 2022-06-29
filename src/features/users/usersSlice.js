import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    addUsers: (state, action) => [...state, ...action.payload],
  },
});

export const { addUser, addUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const selectUsers = (state) => {
  const users = state.users.map((user) => user);
  return users.sort((a, b) =>
    a.fullname > b.fullname ? 1 : b.fullname > a.fullname ? -1 : 0
  );
};

export const selectMessagesFromUserById = (id) => (state) =>
  state.users.find((user) => user.id === id).messages;

export const selectUsersByIds = (arrayIds) => (state) =>
  arrayIds.map((id) => state.users.find((user) => id === user.id));

export const selectFullnameByUserId = (userId) => (state) =>
  state.users.find((user) => user.id === userId).fullname;

export const selectUserById = (id) => (state) =>
  state.users.find((user) => user.id === id);
