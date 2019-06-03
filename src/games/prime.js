import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
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

const getParameters = () => {
  const randomNumber = getRandomInt();
  const question = `${randomNumber}`;
  return isPrime(randomNumber) ? cons(question, 'yes') : cons(question, 'no');
};

export default () => game(getParameters, description);
