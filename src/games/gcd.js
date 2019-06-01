import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const parametersOfGame = () => {
  const randomNum1 = getRandomInt();
  const randomNum2 = getRandomInt();
  const question = `${randomNum1} ${randomNum2}`;
  const findGsd = (n1, n2) => {
    if (n2 === 0) {
      return cons(question, n1.toString());
    }
    return findGsd(n2, n1 % n2);
  };
  return findGsd(randomNum1, randomNum2);
};

export default () => game(parametersOfGame, ruleOfGame);
