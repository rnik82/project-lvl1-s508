import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (getParameters, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const parametrsOfCurrentRound = getParameters();
    console.log(`Question: ${car(parametrsOfCurrentRound)}`);
    const rightAnswer = cdr(parametrsOfCurrentRound);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(roundsCount - 1);
  };
  const roundsCount = 3;
  return iter(roundsCount);
};
