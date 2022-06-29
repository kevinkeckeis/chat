const { subHours, subMinutes, subSeconds } = require('date-fns');

export const genSendDate = (hours = 0, minutes = 0, seconds = 0) => {
  const date = new Date();
  const dateSub = subSeconds(
    subMinutes(subHours(date, hours), minutes),
    seconds
  );
  return JSON.stringify(dateSub);
};
