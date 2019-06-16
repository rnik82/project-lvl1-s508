import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (first, step, index) => {
  let acc = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === index) {
      acc = `${acc} ..`;
    } else {
      acc = `${acc} ${first + step * i}`;
    }
  }
  return acc;
};

const getGameData = () => {
  const firstElement = getRandomInt();
  const step = getRandomInt(1, 10);
  const indexHidenElement = getRandomInt(0, progressionLength - 1);
  const rightAnswer = firstElement + indexHidenElement * step;
  const question = getQuestion(firstElement, step, indexHidenElement);
  return cons(question, rightAnswer.toString());
};

export default () => play(getGameData, description);
