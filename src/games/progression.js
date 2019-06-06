import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import play from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (acc, curentElement, length, iHidenElement, step) => {
  if (length > progressionLength) {
    return acc;
  }
  if (iHidenElement === length) {
    const acc2 = `${acc} ..`;
    const elemOfProgr2 = curentElement + step;
    const length2 = length + 1;
    return getProgression(acc2, elemOfProgr2, length2, iHidenElement, step);
  }
  const acc2 = `${acc} ${curentElement}`;
  const elemOfProgr2 = curentElement + step;
  const length2 = length + 1;
  return getProgression(acc2, elemOfProgr2, length2, iHidenElement, step);
};

const getParameters = () => {
  const firstElement = getRandomInt();
  const step = getRandomInt(1, 11);
  const indexHidenElement = getRandomInt(1, progressionLength + 1);
  const valueOfHidenElement = firstElement + (indexHidenElement - 1) * step;
  const question = getProgression('', firstElement, 1, indexHidenElement, step);
  return cons(question, valueOfHidenElement.toString());
};

export default () => play(getParameters, description);
