import getRandomInt from './getRandomInt';

export default () => {
  const first = getRandomInt();
  const second = getRandomInt();
  const randomAction = getRandomInt(1, 4);
  switch (randomAction) {
    case 1:
      console.log(`Question: ${first} + ${second}`);
      return first + second;
    case 2:
      console.log(`Question: ${first} - ${second}`);
      return first - second;
    case 3:
      console.log(`Question: ${first} * ${second}`);
      return first * second;
    default:
  }
  return undefined;
};
