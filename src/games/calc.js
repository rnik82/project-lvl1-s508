import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getGameData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const radomIndexOfOperation = getRandomInt(0, operations.length - 1);
  const operation = operations[radomIndexOfOperation];

  const question = `${number1} ${operation} ${number2}`;

  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  return cons(question, rightAnswer.toString());
};

export default () => play(getGameData, description);
