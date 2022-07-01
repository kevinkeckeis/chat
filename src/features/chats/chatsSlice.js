import { selectUsers } from '../users/usersSlice';

const { createSlice } = require('@reduxjs/toolkit');
const { max, parseJSON, isEqual } = require('date-fns');
const { createSelector } = require('reselect');

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

export const selectLastMessageByUserId = (userId) =>
  createSelector(
    (state) => state.chats.filter((chat) => chat.userId === userId),
    (userMessages) => {
      const dateArray = userMessages.map((msg) => parseJSON(msg.sendAt));
      const newestDate = max(dateArray);
      const newestMsg = userMessages.find((msg) =>
        isEqual(parseJSON(msg.sendAt), newestDate)
      );
      return newestMsg;
    }
  );

export const msgs = (state) => state.chats;

export const selectLastMessageByUsers = () =>
  createSelector(
    selectUniqUserIds,
    msgs,
    selectUsers,
    (selectUniqUserIds, msgs, selectUsers) => {
      const users = selectUniqUserIds.map((userId) => {
        return selectUsers.find((user) => user.id === userId);
      });
      const msgsLast = users.map((user) => {
        const userMsgs = msgs.filter((msg) => user.id === msg.userId);
        const dateArray = userMsgs.map((msg) => parseJSON(msg.sendAt));
        const newestDate = max(dateArray);
        const newestMsg = userMsgs.find((msg) =>
          isEqual(parseJSON(msg.sendAt), newestDate)
        );
        return { ...user, newestMsgSendAt: newestMsg.sendAt };
      });

      return msgsLast;
    }
  );

export const selectAllLastMessages = () => createSelector(selectUniqUserIds);
