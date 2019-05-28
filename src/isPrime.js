import getRandomInt from './getRandomInt';

export default () => {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}`);
  if (randomNum === 1) {
    return 'no';
  }
  const iter = (divisor) => {
    if (divisor > randomNum / 2) {
      return 'yes';
    }
    return randomNum % divisor === 0 ? 'no' : iter(divisor + 1);
  };
  return iter(2);
};
