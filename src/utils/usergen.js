import { nanoid } from 'nanoid';
import { formatDistance, subDays } from 'date-fns';
import Chance from 'chance';
const chance = Chance();

function generateAvatar(textString, foregroundColor, backgroundColor) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 100;
  canvas.height = 100;

  // Draw background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  ctx.font = 'bold 50px Arial';
  ctx.fillStyle = foregroundColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillText(textString, canvas.width / 2, canvas.height / 2 + 3);

  return canvas.toDataURL('image/png');
}

const getInitials = (firstname, lastname) => firstname[0] + lastname[0];

// Generate a random true or false
const getRandomBinary = () =>
  Math.floor(Math.random() * 2) === 1 ? true : false;

// generate a random number representing a date between 50 days to 150 days ago
const getRandomOldSubNumber = () => Math.floor(Math.random() * 100) + 50;

// generate a random number representing a date between 0 days to 10days ago
const getRandomNewSubNumber = () => Math.floor(Math.random() * 10);

const getLastOnlineDate = () => {
  if (getRandomBinary()) {
    return formatDistance(
      subDays(new Date(), getRandomOldSubNumber()),
      new Date(),
      {
        addSuffix: true,
      }
    );
  } else if (getRandomBinary()) {
    return formatDistance(
      subDays(new Date(), getRandomNewSubNumber()),
      new Date(),
      {
        addSuffix: true,
      }
    );
  } else {
    return 'Online';
  }
};

const genRandomDate = (from, until) => getLastOnlineDate();

function User(
  first = null,
  last = null,
  isFavorite = false,
  online = null,
  id = null
) {
  this.id = id || nanoid();
  this.first = first || chance.first();
  this.last = last || chance.last();
  this.fullname = `${this.first} ${this.last}`;
  this.initials = getInitials(this.first, this.last);
  this.email = `${this.first.toLocaleLowerCase()}.${this.last.toLocaleLowerCase()}@mail.com`;
  this.picture = generateAvatar(this.initials, 'white', '#ccc');
  this.online = online || genRandomDate();
  this.status = false;
  this.isFavorite = isFavorite || false;
  this.messages = [];
}

export const createUsers = (amount) => {
  const users = [];
  for (let i = 0; i < amount; i++) {
    const newUser = new User();
    users.push(newUser);
  }

  const kek = new User(
    'Kevin',
    'Keckeis',
    true,
    'Online',
    'exfySSspI5NVaXNMYpWir'
  );
  const hz = new User(
    'Hans',
    'Zimmer',
    true,
    'Online',
    'L_ug0Vvzp8Cyd1GRVe_G4'
  );
  users.push(kek);
  users.push(hz);
  return users;
};
