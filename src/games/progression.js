import { cons } from 'hexlet-pairs';
import getRandomInt from '../getRandomInt';
import game from '..';

const ruleOfGame = 'What number is missing in the progression?';

const parametersOfGame = () => {
  const firstElemOfProgr = getRandomInt();
  const step = getRandomInt(1, 11);
  const numberOfHidenElement = getRandomInt(1, 11);
  const valueOfHiden = firstElemOfProgr + (numberOfHidenElement - 1) * step;
  const iter = (acc, elemOfProgr, lengthOfProgr) => {
    if (lengthOfProgr === 11) {
      const question = `${acc}`;
      return cons(question, valueOfHiden.toString());
    }
    if (numberOfHidenElement === lengthOfProgr) {
      const acc2 = `${acc} ..`;
      const elemOfProgr2 = elemOfProgr + step;
      const lengthOfProgr2 = lengthOfProgr + 1;
      return iter(acc2, elemOfProgr2, lengthOfProgr2);
    }
    const acc2 = `${acc} ${elemOfProgr}`;
    const elemOfProgr2 = elemOfProgr + step;
    const lengthOfProgr2 = lengthOfProgr + 1;
    return iter(acc2, elemOfProgr2, lengthOfProgr2);
  };
  return iter('', firstElemOfProgr, 1);
};

export default () => game(parametersOfGame, ruleOfGame);
