import virtualCard from './card';

const replicateArray = array => {
  let cloneArr = array.map(element => {
    return new virtualCard(null, null, element.uniqueID, element.type, element.suit);
  });

  return [...array, ...cloneArr];
};

const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const arrayToMatrix = (list, elementsPerSubArray) => {
  let matrix = [];

  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const uniqueID = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const elementsPosition = array => {
  for (let r in array) {
    for (let c in array[r]) {
      array[r][c].r = r;
      array[r][c].c = c;
    }
  }

  return array;
};

export { replicateArray, shuffleArray, getRandomInt, arrayToMatrix, uniqueID, elementsPosition };
