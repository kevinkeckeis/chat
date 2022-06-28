const { nanoid } = require('nanoid');
const { genSendDate } = require('./date.func.js');
const { loremWords } = require('./string.func');

export const createRandomMessage = (userId, isResponse = false) => ({
  id: nanoid(),
  userId,
  message: loremWords(30),
  sendAt: genSendDate(0, 0, 0),
  isResponse: false,
});

export const createMessage = (userId, message) => ({
  id: nanoid(),
  userId,
  message,
  sendAt: genSendDate(0, 0, 0),
  isResponse: true,
});
