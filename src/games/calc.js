import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getParameters = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const randomOperation = operations[getRandomInt(0, 3)];

  const question = `${firstNum} ${randomOperation} ${secondNum}`;

  if (randomOperation === '+') {
    const rightAnswer = firstNum + secondNum;
    return cons(question, rightAnswer.toString());
  }

  if (randomOperation === '-') {
    const rightAnswer = firstNum - secondNum;
    return cons(question, rightAnswer.toString());
  }

  const rightAnswer = firstNum * secondNum;
  return cons(question, rightAnswer.toString());
};

export default () => play(getParameters, description);
