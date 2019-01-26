import { setupMenuDisplay, setupSubItemsMenuDisplay, setupNewGameMenuDisplay } from './menu';

import Settings from './settings';

window.addEventListener('load', () => {
  const instruction = document.querySelector('.js-instructions-btn');
  instruction.addEventListener('click', event => {
    document.querySelector('.js-instructions').style.visibility = 'hidden';
    document.querySelector('.js-instructions').style.opacity = '0';
  });

  const settings = new Settings();

  const _skirt = {
    button: document.querySelector('.js-skirts-button'),
    element: document.querySelector('.js-skirts'),
    subElement: document.querySelector('.js-skirt'),
    type: 's'
  };

  const _difficult = {
    button: document.querySelector('.js-difficulties-button'),
    element: document.querySelector('.js-difficulties'),
    subElement: document.querySelector('.js-difficulty'),
    type: 'd'
  };

  const _newGame = {
    button: document.querySelector('.js-new')
  };

  setupMenuDisplay([_skirt, _difficult]);
  setupSubItemsMenuDisplay([_skirt, _difficult], settings);
  setupNewGameMenuDisplay(_newGame, [_skirt, _difficult], settings);
});
