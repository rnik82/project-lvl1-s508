import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const isEven = number => (number % 2 === 0);

const ruleOfGame = 'Answer "yes" if number even otherwise answer "no".';

const parametersOfGame = () => {
  const question = getRandomInt();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => game(parametersOfGame, ruleOfGame);
