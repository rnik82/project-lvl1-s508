const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export default (num1 = getRandomInt(), num2 = getRandomInt()) => {
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
