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

const progression = () => {
  const firstElemOfProgr = getRandomInt();
  const step = getRandomInt(1, 11);
  const numbOfHiden = getRandomInt(1, 11);
  const valueOfHiden = firstElemOfProgr + (numbOfHiden - 1) * step;
  const iter = (acc, elemOfProgr, lengthOfProgr) => {
    if (lengthOfProgr === 11) {
      console.log(`Question: ${acc}`);
      return valueOfHiden;
    }
    if (numbOfHiden === lengthOfProgr) {
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

const isprime = () => {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}`);
  if (randomNum === 1) {
    return 'no';
  }
  const iter = (divisor) => {
    if (divisor > randomNum / 2) {
      return 'yes';
    }
    return randomNum % divisor === 0 ? 'no' : iter(divisor + 1);
  };
  return iter(2);
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
      if (game === 'div') {
        return greatestDiv();
      }
      if (game === 'progr') {
        return progression();
      }
      return isprime();
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
