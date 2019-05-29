import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const ruleOfGame = 'What is the result of the expression?';

const parametersOfGame = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const chooseRandomAction = getRandomInt(1, 4);
  let randomParametrs;
  let question;
  let rightAnswer;
  switch (chooseRandomAction) {
    case 1:
      question = `${firstNum} + ${secondNum}`;
      rightAnswer = firstNum + secondNum;
      randomParametrs = cons(question, rightAnswer.toString());
      break;
    case 2:
      question = `${firstNum} - ${secondNum}`;
      rightAnswer = firstNum - secondNum;
      randomParametrs = cons(question, rightAnswer.toString());
      break;
    default:
      question = `${firstNum} * ${secondNum}`;
      rightAnswer = firstNum * secondNum;
      randomParametrs = cons(question, rightAnswer.toString());
  }
  return randomParametrs;
};

export default () => game(parametersOfGame, ruleOfGame);
