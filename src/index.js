import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let counter = 1;
  let isNumEven;
  while (counter <=3) {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}!`)
  let answer = readlineSync.question('Your answer: ');
  isNumEven = randomNum % 2 === 0 ? 'yes' : 'no';
  if (isNumEven !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumEven}'. Let's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  counter += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
