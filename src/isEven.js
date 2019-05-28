import getRandomInt from './getRandomInt';

export default () => {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}`);
  return randomNum % 2 === 0 ? 'yes' : 'no';
};
