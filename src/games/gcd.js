import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const getDataGame = () => {
  const randomNum1 = getRandomInt();
  const randomNum2 = getRandomInt();
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = findGcd(randomNum1, randomNum2);
  return cons(question, rightAnswer.toString());
};

export default () => play(getDataGame, description);
