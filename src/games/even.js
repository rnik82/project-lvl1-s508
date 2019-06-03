import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getParameters = () => {
  const question = getRandomInt();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => game(getParameters, description);
