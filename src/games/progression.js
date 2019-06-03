import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const description = 'What number is missing in the progression?';

const getProgression = (acc, curentElement, length, hidenElement, step) => {
  if (length === 11) {
    return acc;
  }
  if (hidenElement === length) {
    const acc2 = `${acc} ..`;
    const elemOfProgr2 = curentElement + step;
    const length2 = length + 1;
    return getProgression(acc2, elemOfProgr2, length2, hidenElement, step);
  }
  const acc2 = `${acc} ${curentElement}`;
  const elemOfProgr2 = curentElement + step;
  const length2 = length + 1;
  return getProgression(acc2, elemOfProgr2, length2, hidenElement, step);
};

const getParameters = () => {
  const firstElement = getRandomInt();
  const step = getRandomInt(1, 11);
  const hidenElement = getRandomInt(1, 11);
  const valueOfHiden = firstElement + (hidenElement - 1) * step;
  const question = getProgression('', firstElement, 1, hidenElement, step);
  return cons(question, valueOfHiden.toString());
};

export default () => game(getParameters, description);
