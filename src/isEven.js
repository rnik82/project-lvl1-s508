const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export default () => {
  const randomNum = getRandomInt();
  console.log(`Question: ${randomNum}`);
  return randomNum % 2 === 0 ? 'yes' : 'no';
};
