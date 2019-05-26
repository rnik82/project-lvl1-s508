import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const isEven = () => {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}`);
  return randomNum % 2 === 0 ? 'yes' : 'no';
};

const calc = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  switch (getRandomInt(1, 4)) {
    case 1:
      console.log(`Question: ${first} + ${second}`);
      return first + second;
    case 2:
      console.log(`Question: ${first} - ${second}`);
      return first - second;
    case 3:
      console.log(`Question: ${first} * ${second}`);
      return first * second;
    default:
  }
  return undefined;
};

const greatestDiv = (num1 = getRandomInt(), num2 = getRandomInt()) => {
  console.log(`Question: ${num1} ${num2}`);
  const iter = (n1, n2, div) => {
    if (div === n2) {
      return 1;
    }
    if (n2 % div === 0 && n1 % (n2 / div) === 0) {
      return (n2 / div);
    }
    return iter(n1, n2, div + 1);
  };
  if (num1 < num2) {
    return iter(num2, num1, 1);
  }
  return iter(num1, num2, 1);
};

export default (game) => {
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
        return calc();
      }
      return greatestDiv();
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
