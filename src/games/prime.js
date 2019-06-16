import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor > number / 2) {
      return true;
    }
    return number % divisor === 0 ? false : iter(divisor + 1);
  };
  return iter(2);
};

const getGameData = () => {
  const question = getRandomInt();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => play(getGameData, description);
