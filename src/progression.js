const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export default () => {
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
