const { createSlice } = require('@reduxjs/toolkit');
const { subHours, subMinutes, subSeconds } = require('date-fns');
const { loremWords } = require('../../utils/string.func');

const genSendDate = (hours = 0, minutes = 0, seconds = 0) => {
  const date = new Date();
  const dateSub = subSeconds(
    subMinutes(subHours(date, hours), minutes),
    seconds
  );
  return dateSub;
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    setMessagesRead: (state, action) => {
      const userMessages = state.filter(
        (chat) => chat.userId === action.payload
      );
      userMessages.map((msg) => (msg.isRead = true));
    },
  },
});

export const { addMessage, setMessagesRead } = chatsSlice.actions;
export default chatsSlice.reducer;

export const selectUniqUserIds = (state) => {
  const unique = [];
  state.chats.forEach((chat) => {
    if (!unique.includes(chat.userId)) unique.push(chat.userId);
  });
  return unique;
};

export const selectMessagesByUserId = (userId) => (state) => {
  return state.chats.filter((chat) => chat.userId === userId);
};

export const selectUnreadMessagesByUserId = (userId) => (state) => {
  return state.chats.filter((chat) => chat.userId === userId && !chat.isRead);
};

export const selectLastMessageById = (state) => {};
