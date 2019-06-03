import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const description = 'What is the result of the expression?';

const getParameters = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const question1 = `${firstNum} + ${secondNum}`;
  const rightAnswer1 = firstNum + secondNum;
  const randomParametrs1 = cons(question1, rightAnswer1.toString());

  const question2 = `${firstNum} - ${secondNum}`;
  const rightAnswer2 = firstNum - secondNum;
  const randomParametrs2 = cons(question2, rightAnswer2.toString());

  const question3 = `${firstNum} * ${secondNum}`;
  const rightAnswer3 = firstNum * secondNum;
  const randomParametrs3 = cons(question3, rightAnswer3.toString());

  const containerForChoosingAction = [randomParametrs1, randomParametrs2, randomParametrs3];
  const randomAction = getRandomInt(0, 3);
  const resultRandomParametrs = containerForChoosingAction[randomAction];

  return resultRandomParametrs;
};

export default () => game(getParameters, description);
