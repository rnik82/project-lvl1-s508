import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (parametersOfGame, ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (roundOfGame) => {
    if (roundOfGame === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const parametrsOfCurrentGame = parametersOfGame();
    console.log(`Question: ${car(parametrsOfCurrentGame)}`);
    const rightAnswer = cdr(parametrsOfCurrentGame);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(roundOfGame + 1);
  };
  return iter(0);
};
