const { createSlice } = require('@reduxjs/toolkit');
const { subHours, subMinutes, subSeconds } = require('date-fns');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const genSendDate = (hours = 0, minutes = 0, seconds = 0) => {
  const date = new Date();
  const dateSub = subSeconds(
    subMinutes(subHours(date, hours), minutes),
    seconds
  );
  return dateSub;
};

const initialState = [
  {
    id: '57UMUAUh4GK7G10U8PWmt',
    userId: 'exfySSspI5NVaXNMYpWir',
    message: lorem.generateWords(20),
    sendAt: genSendDate(1, 0, 10),
    isResponse: false,
  },
  {
    id: '4UmTitqwQuD6Dav-uFpvt',
    userId: 'exfySSspI5NVaXNMYpWir',
    message: lorem.generateWords(10),
    sendAt: genSendDate(0, 0, 10),
    isResponse: true,
  },
  {
    id: 'CHOPlmL6hJvZFT2BD3wPa-uFpvt',
    userId: 'exfySSspI5NVaXNMYpWir',
    message: lorem.generateWords(20),
    sendAt: genSendDate(0, 0, 10),
    isResponse: false,
  },
  {
    id: 'cXPrr6q8xQSbiLkipwS7a',
    userId: 'L_ug0Vvzp8Cyd1GRVe_G4',
    message: lorem.generateWords(30),
    sendAt: genSendDate(0, 0, 10),
    isResponse: false,
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

export const selectMessagesByUserId = (userId) => (state) => {
  return state.chats.filter((chat) => chat.userId === userId);
};

export const selectLastMessageById = (state) => {};
