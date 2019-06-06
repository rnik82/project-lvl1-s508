import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

export default (getQuestionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (attempsCount) => {
    if (attempsCount === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const parametrsOfCurrentRound = getQuestionAnswer();
    const question = car(parametrsOfCurrentRound);
    console.log(`Question: ${question}`);
    const rightAnswer = cdr(parametrsOfCurrentRound);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(attempsCount + 1);
  };

  return iter(0);
};
