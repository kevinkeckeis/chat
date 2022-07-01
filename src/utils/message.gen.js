const { nanoid } = require('nanoid');
const { genSendDate } = require('./date.func.js');
const { loremWords } = require('./string.func');

const rngWords = Math.floor(Math.random() * 30) + 5;

export const createRandomMessage = (userId, isResponse = false) => ({
  id: nanoid(),
  userId,
  message: loremWords(rngWords),
  sendAt: genSendDate(0, 0, 0),
  isResponse: false,
  isRead: false,
});

export const createMessage = (userId, message) => ({
  id: nanoid(),
  userId,
  message,
  sendAt: genSendDate(0, 0, 0),
  isResponse: true,
  isRead: false,
});
