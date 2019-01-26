import virtualCard from './card';
import Stopwatch from './stopwatch';

import { replicateArray, shuffleArray, getRandomInt, arrayToMatrix, uniqueID, elementsPosition } from './helpers';

import { CARDS_TYPES, CARDS_SUITS, CARDS_PATH } from './const';

import { controlsController, controlsControllerData } from './menu';

let uniqueCardsContainer = [];
let cardsArray = [];
let cardsMatrix = [];

let STACK = [];
let SCORE;

const checkСoincidence = STACK => {
  if (STACK[0]._class.uniqueID === STACK[1]._class.uniqueID) {
    SCORE--;
    document.querySelector('.js-score').innerHTML = SCORE;

    STACK.forEach(({ element }) => {
      element.classList.add('card--found');
    });
  }

  if (!SCORE) {
    setTimeout(() => {
      stopwatch.stop();

      document.querySelector('.js-congratulations').style.visibility = 'visible';
      document.querySelector('.js-congratulations').style.opacity = '1';

      document.querySelector('.js-congratulations-time').innerHTML = stopwatch.state;

      document.querySelector('.js-congratulations-button').addEventListener('click', resetGame);
    }, 1000);
  }
};

const resetGame = () => {
  document.querySelector('.js-congratulations-button').removeEventListener('click', resetGame);
  document.querySelector('.main').innerHTML = '';
  document.querySelector('.js-watch').innerHTML = '00:00:00';

  stopwatch.reset();
  stopwatch.unsubscribe();

  uniqueCardsContainer = [];
  cardsArray = [];
  cardsMatrix = [];
  STACK = [];
  CARDS_TYPES_BUFFER = [];

  controlsController(false, controlsControllerData);

  document.querySelector('.js-congratulations').style.visibility = '';
  document.querySelector('.js-congratulations').style.opacity = '';
};

const cardStyle = ({ element: parent, _class }, style) => {
  const action = style === true ? 'add' : 'remove';

  parent.childNodes.forEach(child => {
    if (child.classList.contains('card__back')) {
      child.classList[action]('card__back--hide');
    } else if (child.classList.contains('card__front')) {
      child.classList[action]('card__front--show');
    }
  });
};

let isWaitClear = false;

const clearStack = () => {
  while (STACK.length) {
    cardStyle(STACK.pop(), false);
  }
};

const addToStack = (index, element) => {
  let el = {
    element: element,
    _class: cardsArray[index]
  };

  STACK.push(el);
  cardStyle(el, true);

  if (STACK.length === 2) {
    isWaitClear = !isWaitClear;
    checkСoincidence(STACK);

    setTimeout(() => {
      clearStack();
      isWaitClear = !isWaitClear;
    }, 1000);
  }
};

const checkOnSelf = index => {
  if (STACK.length) if (cardsArray[index] === STACK[0]._class) return true;
};

const stackControl = (index, element) => {
  if (STACK.length < 2) {
    if (checkOnSelf(index)) return;

    addToStack(index, element);
  } else {
    if (isWaitClear) return;
    clearStack();
  }
};

const addListenerOnCard = element => {
  element.addEventListener('click', ({ currentTarget }) => {
    let cardIndex = cardsArray.findIndex(i => i.r === currentTarget.dataset.row && i.c === currentTarget.dataset.cell);
    stackControl(cardIndex, currentTarget);
  });
};

const generateCard = (matrix, skirt, r, c) => {
  const parent = document.createElement('div');
  parent.classList.add('main__card', 'card');
  parent.dataset.row = r;
  parent.dataset.cell = c;

  const back = document.createElement('div');
  back.classList.add('card__back');
  back.style.background = `url(${CARDS_PATH}skirts/${skirt}.png) no-repeat`;

  const front = document.createElement('div');
  front.classList.add('card__front');
  front.style.background = `url(${CARDS_PATH}cards/${matrix[r][c].type}${matrix[r][c].suit}.png) no-repeat`;

  parent.appendChild(back);
  parent.appendChild(front);

  addListenerOnCard(parent);

  return parent;
};

const generateContainer = () => {
  const container = document.createElement('div');
  container.classList.add('main__container');

  return container;
};

const generateHTML = (matrix, skirt) => {
  for (let r = 0; r < matrix.length; r++) {
    const container = generateContainer();

    for (let c = 0; c < matrix[r].length; c++) container.appendChild(generateCard(matrix, skirt, r, c));

    document.querySelector('.main').appendChild(container);
  }
};

const cardsTypeGenerate = () => {
  let flag = false;
  let data;
  while (!flag) {
    data = CARDS_TYPES[getRandomInt(0, CARDS_TYPES.length)];
    let coincidence = CARDS_TYPES_BUFFER.indexOf(data);

    if (coincidence < 0) {
      CARDS_TYPES_BUFFER.push(data);
      flag = !flag;
    } else {
      continue;
    }
  }

  return data;
};

let stopwatch;
let CARDS_TYPES_BUFFER = [];

const cardGeneration = ({ skirt, difficulty: { r, c } }) => {
  const count = (r * c) / 2;
  SCORE = count;

  document.querySelector('.js-score').innerHTML = SCORE;

  for (let i = 0; i < count; i++) {
    uniqueCardsContainer.push(new virtualCard(null, null, uniqueID(), cardsTypeGenerate(), CARDS_SUITS[getRandomInt(0, CARDS_SUITS.length)]));
  }

  cardsArray = shuffleArray(replicateArray(uniqueCardsContainer));
  cardsMatrix = arrayToMatrix(cardsArray, c);

  generateHTML(elementsPosition(cardsMatrix), skirt);

  stopwatch = new Stopwatch();
  let watch = document.querySelector('.js-watch');
  stopwatch.subscribe(() => {
    watch.innerHTML = stopwatch.state;
  });
  stopwatch.start();
};

export default cardGeneration;
