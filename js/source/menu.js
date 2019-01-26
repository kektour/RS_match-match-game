import cardGeneration from './game';

const setupMenuDisplay = array => {
  array.forEach(({ button, element }) => {
    button.addEventListener('click', ({ target }) => {
      if (target !== button) {
        return;
      }

      if (!element.style.display || element.style.display === 'none') element.style.display = 'block';
      else element.style.display = 'none';
    });
  });
};

const setupSubItemsMenuDisplay = (array, settings) => {
  array.forEach(({ type, element, subElement }) => {
    if (type === 's') {
      subElement.addEventListener('click', ({ target }) => {
        if (target.localName === 'img') settings.skirt = target.parentNode.dataset.id;
        else settings.skirt = target.dataset.id;

        element.style.display = 'none';
      });
    } else if (type === 'd') {
      subElement.addEventListener('click', ({ target }) => {
        settings.difficulty.r = target.dataset.rows;
        settings.difficulty.c = target.dataset.cells;

        element.style.display = 'none';
      });
    }
  });
};

const controlsController = (value, elements) => {
  elements[elements.findIndex(i => i.type === 's')].element.style.display = 'none';
  elements[elements.findIndex(i => i.type === 'd')].element.style.display = 'none';

  const func = value === true ? 'add' : 'remove';

  for (const { button } of elements) {
    button.disabled = value;
    button.classList[func]('--disabled');
  }
};

let controlsControllerData;

const setupNewGameMenuDisplay = (newGameEl, menuElements, settings) => {
  const { button } = newGameEl;

  controlsControllerData = [...menuElements, newGameEl];

  button.addEventListener('click', event => {
    controlsController(true, [...menuElements, newGameEl]);

    cardGeneration(settings);
  });
};

export { setupMenuDisplay, setupSubItemsMenuDisplay, setupNewGameMenuDisplay, controlsController, controlsControllerData };
