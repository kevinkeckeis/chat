const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  {
    userId: 'exfySSspI5NVaXNMYpWir',
    message: 'Hey, how are you?',
    isResponse: false,
  },
  {
    userId: 'exfySSspI5NVaXNMYpWir',
    message: 'i feel great! how about you?',
    isResponse: true,
  },
  {
    userId: 'L_ug0Vvzp8Cyd1GRVe_G4',
    message: 'Hey how are you?',
    isResponse: true,
  },
];

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;

export const selectUniqUserIds = (state) => {
  return state.chats.reduce((prev, curr) => {
    if (!prev.includes(curr.userId)) prev.push(curr.userId);
    return prev;
  }, []);
};
