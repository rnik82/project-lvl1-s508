import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const parametersOfGame = (num1 = getRandomInt(), num2 = getRandomInt()) => {
  const question = `${num1} ${num2}`;
  const iter = (n1, n2, div) => {
    if (div === n2) {
      return cons(question, '1');
    }
    if (n2 % div === 0 && n1 % (n2 / div) === 0) {
      return cons(question, (n2 / div).toString());
    }
    return iter(n1, n2, div + 1);
  };
  if (num1 < num2) {
    return iter(num2, num1, 1);
  }
  return iter(num1, num2, 1);
};

export default () => game(parametersOfGame, ruleOfGame);
