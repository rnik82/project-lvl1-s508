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
  }
};

export default (game) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const rightAnswer = game === 'even' ? isEven() : calc();

    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer.toString() !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    return iter(counter - 1);
  };

  return iter(3);
};
