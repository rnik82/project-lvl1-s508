import readlineSync from 'readline-sync';
import isEven from './isEven';
import calculate from './calculate';
import greatestDiv from './greatestDiv';
import progression from './progression';
import isPrime from './isPrime';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  switch (game) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'div':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progr':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const rightAnsw = () => {
      if (game === 'even') {
        return isEven();
      }
      if (game === 'calc') {
        return calculate();
      }
      if (game === 'div') {
        return greatestDiv();
      }
      if (game === 'progr') {
        return progression();
      }
      return isPrime();
    };
    const rightAnswer = rightAnsw();

    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer.toString() !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(counter - 1);
  };

  return iter(3);
};
