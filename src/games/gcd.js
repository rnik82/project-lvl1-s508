import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }
  return findGcd(n2, n1 % n2);
};

const getParameters = () => {
  const randomNum1 = getRandomInt();
  const randomNum2 = getRandomInt();
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = findGcd(randomNum1, randomNum2);
  return cons(question, rightAnswer.toString());
};

export default () => game(getParameters, description);
