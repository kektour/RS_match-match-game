/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.controlsControllerData = exports.controlsController = exports.setupNewGameMenuDisplay = exports.setupSubItemsMenuDisplay = exports.setupMenuDisplay = undefined;

var _game = __webpack_require__(3);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setupMenuDisplay = function setupMenuDisplay(array) {

    array.forEach(function (_ref) {
        var button = _ref.button,
            element = _ref.element;


        button.addEventListener('click', function (_ref2) {
            var target = _ref2.target;


            if (target !== button) {
                return;
            }

            if (!element.style.display || element.style.display === "none") element.style.display = "block";else element.style.display = "none";
        });
    });
};

var setupSubItemsMenuDisplay = function setupSubItemsMenuDisplay(array, settings) {

    array.forEach(function (_ref3) {
        var type = _ref3.type,
            element = _ref3.element,
            subElement = _ref3.subElement;


        if (type === 's') {

            subElement.addEventListener('click', function (_ref4) {
                var target = _ref4.target;


                if (target.localName === 'img') settings.skirt = target.parentNode.dataset.id;else settings.skirt = target.dataset.id;

                element.style.display = "none";
            });
        } else if (type === 'd') {
            subElement.addEventListener('click', function (_ref5) {
                var target = _ref5.target;


                settings.difficulty.r = target.dataset.rows;
                settings.difficulty.c = target.dataset.cells;

                element.style.display = "none";
            });
        }
    });
};

var controlsController = function controlsController(value, elements) {

    elements[elements.findIndex(function (i) {
        return i.type === "s";
    })].element.style.display = "none";
    elements[elements.findIndex(function (i) {
        return i.type === "d";
    })].element.style.display = "none";

    var func = value === true ? 'add' : 'remove';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var button = _step.value.button;

            button.disabled = value;
            button.classList[func]('--disabled');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var controlsControllerData = void 0;

var setupNewGameMenuDisplay = function setupNewGameMenuDisplay(newGameEl, menuElements, settings) {
    var button = newGameEl.button;


    exports.controlsControllerData = controlsControllerData = [].concat(_toConsumableArray(menuElements), [newGameEl]);

    button.addEventListener('click', function (event) {

        controlsController(true, [].concat(_toConsumableArray(menuElements), [newGameEl]));

        (0, _game2.default)(settings);
    });
};

exports.setupMenuDisplay = setupMenuDisplay;
exports.setupSubItemsMenuDisplay = setupSubItemsMenuDisplay;
exports.setupNewGameMenuDisplay = setupNewGameMenuDisplay;
exports.controlsController = controlsController;
exports.controlsControllerData = controlsControllerData;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(type, suit) {
    _classCallCheck(this, Card);

    this.type = type;
    this.suit = suit;
};

var virtualCard = function (_Card) {
    _inherits(virtualCard, _Card);

    function virtualCard(r, c, uniqueID, type, suit) {
        _classCallCheck(this, virtualCard);

        var _this = _possibleConstructorReturn(this, (virtualCard.__proto__ || Object.getPrototypeOf(virtualCard)).call(this, type, suit));

        _this.r = r;
        _this.c = c;
        _this.uniqueID = uniqueID;
        return _this;
    }

    return virtualCard;
}(Card);

exports.default = virtualCard;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(0);

var _settings = __webpack_require__(7);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {

    var instruction = document.querySelector('.js-instructions-btn');
    instruction.addEventListener('click', function (event) {
        document.querySelector('.js-instructions').style.visibility = 'hidden';
        document.querySelector('.js-instructions').style.opacity = '0';
    });

    var settings = new _settings2.default();

    var _skirt = {
        button: document.querySelector('.js-skirts-button'),
        element: document.querySelector('.js-skirts'),
        subElement: document.querySelector('.js-skirt'),
        type: 's'
    };

    var _difficult = {
        button: document.querySelector('.js-difficulties-button'),
        element: document.querySelector('.js-difficulties'),
        subElement: document.querySelector('.js-difficulty'),
        type: 'd'
    };

    var _newGame = {
        button: document.querySelector('.js-new')
    };

    (0, _menu.setupMenuDisplay)([_skirt, _difficult]);
    (0, _menu.setupSubItemsMenuDisplay)([_skirt, _difficult], settings);
    (0, _menu.setupNewGameMenuDisplay)(_newGame, [_skirt, _difficult], settings);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(1);

var _card2 = _interopRequireDefault(_card);

var _stopwatch = __webpack_require__(4);

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _helpers = __webpack_require__(5);

var _const = __webpack_require__(6);

var _menu = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueCardsContainer = [];
var cardsArray = [];
var cardsMatrix = [];

var STACK = [];
var SCORE = void 0;

var checkСoincidence = function checkСoincidence(STACK) {

    if (STACK[0]._class.uniqueID === STACK[1]._class.uniqueID) {

        SCORE--;
        document.querySelector('.js-score').innerHTML = SCORE;

        STACK.forEach(function (_ref) {
            var element = _ref.element;

            element.classList.add('card--found');
        });
    }

    if (!SCORE) {

        setTimeout(function () {
            stopwatch.stop();

            document.querySelector('.js-congratulations').style.visibility = 'visible';
            document.querySelector('.js-congratulations').style.opacity = '1';

            document.querySelector('.js-congratulations-time').innerHTML = stopwatch.state;

            document.querySelector('.js-congratulations-button').addEventListener('click', resetGame);
        }, 1000);
    }
};

var resetGame = function resetGame() {

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

    (0, _menu.controlsController)(false, _menu.controlsControllerData);

    document.querySelector('.js-congratulations').style.visibility = '';
    document.querySelector('.js-congratulations').style.opacity = '';
};

var cardStyle = function cardStyle(_ref2, style) {
    var parent = _ref2.element,
        _class = _ref2._class;


    var action = style === true ? 'add' : 'remove';

    parent.childNodes.forEach(function (child) {
        if (child.classList.contains('card__back')) {
            child.classList[action]('card__back--hide');
        } else if (child.classList.contains('card__front')) {
            child.classList[action]('card__front--show');
        }
    });
};

var isWaitClear = false;

var clearStack = function clearStack() {

    while (STACK.length) {
        cardStyle(STACK.pop(), false);
    }
};

var addToStack = function addToStack(index, element) {
    var el = {
        element: element,
        _class: cardsArray[index]
    };

    STACK.push(el);
    cardStyle(el, true);

    if (STACK.length === 2) {

        isWaitClear = !isWaitClear;
        checkСoincidence(STACK);

        setTimeout(function () {
            clearStack();
            isWaitClear = !isWaitClear;
        }, 1000);
    }
};

var checkOnSelf = function checkOnSelf(index) {
    if (STACK.length) if (cardsArray[index] === STACK[0]._class) return true;
};

var stackControl = function stackControl(index, element) {

    if (STACK.length < 2) {

        if (checkOnSelf(index)) return;

        addToStack(index, element);
    } else {
        if (isWaitClear) return;
        clearStack();
    }
};

var addListenerOnCard = function addListenerOnCard(element) {

    element.addEventListener('click', function (_ref3) {
        var currentTarget = _ref3.currentTarget;

        var cardIndex = cardsArray.findIndex(function (i) {
            return i.r === currentTarget.dataset.row && i.c === currentTarget.dataset.cell;
        });
        stackControl(cardIndex, currentTarget);
    });
};

var generateCard = function generateCard(matrix, skirt, r, c) {

    var parent = document.createElement('div');
    parent.classList.add('main__card', 'card');
    parent.dataset.row = r;
    parent.dataset.cell = c;

    var back = document.createElement('div');
    back.classList.add('card__back');
    back.style.background = 'url(' + _const.CARDS_PATH + 'skirts/' + skirt + '.png) no-repeat';

    var front = document.createElement('div');
    front.classList.add('card__front');
    front.style.background = 'url(' + _const.CARDS_PATH + 'cards/' + matrix[r][c].type + matrix[r][c].suit + '.png) no-repeat';

    parent.appendChild(back);
    parent.appendChild(front);

    addListenerOnCard(parent);

    return parent;
};

var generateContainer = function generateContainer() {
    var container = document.createElement('div');
    container.classList.add('main__container');

    return container;
};

var generateHTML = function generateHTML(matrix, skirt) {

    for (var r = 0; r < matrix.length; r++) {

        var container = generateContainer();

        for (var c = 0; c < matrix[r].length; c++) {
            container.appendChild(generateCard(matrix, skirt, r, c));
        }document.querySelector('.main').appendChild(container);
    }
};

var cardsTypeGenerate = function cardsTypeGenerate() {

    var flag = false;
    var data = void 0;
    while (!flag) {

        data = _const.CARDS_TYPES[(0, _helpers.getRandomInt)(0, _const.CARDS_TYPES.length)];
        var coincidence = CARDS_TYPES_BUFFER.indexOf(data);

        if (coincidence < 0) {
            CARDS_TYPES_BUFFER.push(data);
            flag = !flag;
        } else {
            continue;
        }
    }

    return data;
};

var stopwatch = void 0;
var CARDS_TYPES_BUFFER = [];

var cardGeneration = function cardGeneration(_ref4) {
    var skirt = _ref4.skirt,
        _ref4$difficulty = _ref4.difficulty,
        r = _ref4$difficulty.r,
        c = _ref4$difficulty.c;


    var count = r * c / 2;
    SCORE = count;

    document.querySelector('.js-score').innerHTML = SCORE;

    for (var i = 0; i < count; i++) {

        uniqueCardsContainer.push(new _card2.default(null, null, (0, _helpers.uniqueID)(), cardsTypeGenerate(), _const.CARDS_SUITS[(0, _helpers.getRandomInt)(0, _const.CARDS_SUITS.length)]));
    }

    cardsArray = (0, _helpers.shuffleArray)((0, _helpers.replicateArray)(uniqueCardsContainer));
    cardsMatrix = (0, _helpers.arrayToMatrix)(cardsArray, c);

    generateHTML((0, _helpers.elementsPosition)(cardsMatrix), skirt);

    stopwatch = new _stopwatch2.default();
    var watch = document.querySelector('.js-watch');
    stopwatch.subscribe(function () {
        watch.innerHTML = stopwatch.state;
    });
    stopwatch.start();
};

exports.default = cardGeneration;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stopwatch = function () {
    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.state = '00:00:00';
        this.timeout = null;

        this._callbacks = [];

        this.tick = this.tick.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.update = this.update.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    _createClass(Stopwatch, [{
        key: 'tick',
        value: function tick() {
            this.seconds++;
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes++;
                if (this.minutes >= 60) {
                    this.minutes = 0;
                    this.hours++;
                }
            }

            this.update();
        }
    }, {
        key: 'start',
        value: function start() {
            this.timeout = setInterval(this.tick, 1000);
        }
    }, {
        key: 'stop',
        value: function stop() {
            clearInterval(this.timeout);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.state = '00:00:00';
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
        }
    }, {
        key: 'update',
        value: function update() {
            this.state = (this.hours ? this.hours > 9 ? this.hours : '0' + this.hours : '00') + ':' + (this.minutes ? this.minutes > 9 ? this.minutes : '0' + this.minutes : "00") + ':' + (this.seconds > 9 ? this.seconds : '0' + this.seconds);
            this._callbacks.forEach(function (callback) {
                return callback();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe(callback) {
            this._callbacks.push(callback);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this._callbacks = [];
        }
    }]);

    return Stopwatch;
}();

exports.default = Stopwatch;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementsPosition = exports.uniqueID = exports.arrayToMatrix = exports.getRandomInt = exports.shuffleArray = exports.replicateArray = undefined;

var _card = __webpack_require__(1);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var replicateArray = function replicateArray(array) {

    var cloneArr = array.map(function (element) {
        return new _card2.default(null, null, element.uniqueID, element.type, element.suit);
    });

    return [].concat(_toConsumableArray(array), _toConsumableArray(cloneArr));
};

var shuffleArray = function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue = void 0,
        randomIndex = void 0;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

var arrayToMatrix = function arrayToMatrix(list, elementsPerSubArray) {
    var matrix = [];

    for (var i = 0, k = -1; i < list.length; i++) {

        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
};

var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var uniqueID = function uniqueID() {
    return Math.random().toString(36).substr(2, 9);
};

var elementsPosition = function elementsPosition(array) {
    for (var r in array) {
        for (var c in array[r]) {
            array[r][c].r = r;
            array[r][c].c = c;
        }
    }

    return array;
};

exports.replicateArray = replicateArray;
exports.shuffleArray = shuffleArray;
exports.getRandomInt = getRandomInt;
exports.arrayToMatrix = arrayToMatrix;
exports.uniqueID = uniqueID;
exports.elementsPosition = elementsPosition;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CARDS_PATH = './img/';
var CARDS_TYPES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var CARDS_SUITS = ['_of_clubs', '_of_diamonds', '_of_hearts', '_of_spades'];

exports.CARDS_PATH = CARDS_PATH;
exports.CARDS_TYPES = CARDS_TYPES;
exports.CARDS_SUITS = CARDS_SUITS;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function Settings() {
    var skirt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";
    var difficulty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        r: 2,
        c: 5
    };

    _classCallCheck(this, Settings);

    this.skirt = skirt;
    this.difficulty = difficulty;
};

exports.default = Settings;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjlkNTU3ZjBjZjZkOThlM2Q3ZTkiLCJ3ZWJwYWNrOi8vLy4vanMvc291cmNlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc291cmNlL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3NvdXJjZS9nYW1lLmpzIiwid2VicGFjazovLy8uL2pzL3NvdXJjZS9zdG9wd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvc291cmNlL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc291cmNlL2NvbnN0LmpzIiwid2VicGFjazovLy8uL2pzL3NvdXJjZS9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJzZXR1cE1lbnVEaXNwbGF5IiwiYXJyYXkiLCJmb3JFYWNoIiwiYnV0dG9uIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXR1cFN1Ykl0ZW1zTWVudURpc3BsYXkiLCJzZXR0aW5ncyIsInR5cGUiLCJzdWJFbGVtZW50IiwibG9jYWxOYW1lIiwic2tpcnQiLCJwYXJlbnROb2RlIiwiZGF0YXNldCIsImlkIiwiZGlmZmljdWx0eSIsInIiLCJyb3dzIiwiYyIsImNlbGxzIiwiY29udHJvbHNDb250cm9sbGVyIiwidmFsdWUiLCJlbGVtZW50cyIsImZpbmRJbmRleCIsImkiLCJmdW5jIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJjb250cm9sc0NvbnRyb2xsZXJEYXRhIiwic2V0dXBOZXdHYW1lTWVudURpc3BsYXkiLCJuZXdHYW1lRWwiLCJtZW51RWxlbWVudHMiLCJldmVudCIsIkNhcmQiLCJzdWl0IiwidmlydHVhbENhcmQiLCJ1bmlxdWVJRCIsIndpbmRvdyIsImluc3RydWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJfc2tpcnQiLCJfZGlmZmljdWx0IiwiX25ld0dhbWUiLCJ1bmlxdWVDYXJkc0NvbnRhaW5lciIsImNhcmRzQXJyYXkiLCJjYXJkc01hdHJpeCIsIlNUQUNLIiwiU0NPUkUiLCJjaGVja9Chb2luY2lkZW5jZSIsIl9jbGFzcyIsImlubmVySFRNTCIsImFkZCIsInNldFRpbWVvdXQiLCJzdG9wd2F0Y2giLCJzdG9wIiwic3RhdGUiLCJyZXNldEdhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzZXQiLCJ1bnN1YnNjcmliZSIsIkNBUkRTX1RZUEVTX0JVRkZFUiIsImNhcmRTdHlsZSIsInBhcmVudCIsImFjdGlvbiIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImNvbnRhaW5zIiwiaXNXYWl0Q2xlYXIiLCJjbGVhclN0YWNrIiwibGVuZ3RoIiwicG9wIiwiYWRkVG9TdGFjayIsImluZGV4IiwiZWwiLCJwdXNoIiwiY2hlY2tPblNlbGYiLCJzdGFja0NvbnRyb2wiLCJhZGRMaXN0ZW5lck9uQ2FyZCIsImN1cnJlbnRUYXJnZXQiLCJjYXJkSW5kZXgiLCJyb3ciLCJjZWxsIiwiZ2VuZXJhdGVDYXJkIiwibWF0cml4IiwiY3JlYXRlRWxlbWVudCIsImJhY2siLCJiYWNrZ3JvdW5kIiwiZnJvbnQiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZ2VuZXJhdGVIVE1MIiwiY2FyZHNUeXBlR2VuZXJhdGUiLCJmbGFnIiwiZGF0YSIsImNvaW5jaWRlbmNlIiwiaW5kZXhPZiIsImNhcmRHZW5lcmF0aW9uIiwiY291bnQiLCJ3YXRjaCIsInN1YnNjcmliZSIsInN0YXJ0IiwiU3RvcHdhdGNoIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInRpbWVvdXQiLCJfY2FsbGJhY2tzIiwidGljayIsImJpbmQiLCJ1cGRhdGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYWxsYmFjayIsInJlcGxpY2F0ZUFycmF5IiwiY2xvbmVBcnIiLCJtYXAiLCJzaHVmZmxlQXJyYXkiLCJjdXJyZW50SW5kZXgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXJyYXlUb01hdHJpeCIsImxpc3QiLCJlbGVtZW50c1BlclN1YkFycmF5IiwiayIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsInRvU3RyaW5nIiwic3Vic3RyIiwiZWxlbWVudHNQb3NpdGlvbiIsIkNBUkRTX1BBVEgiLCJDQVJEU19UWVBFUyIsIkNBUkRTX1NVSVRTIiwiU2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVzs7QUFFaENBLFVBQU1DLE9BQU4sQ0FBYyxnQkFHUjtBQUFBLFlBRkZDLE1BRUUsUUFGRkEsTUFFRTtBQUFBLFlBREZDLE9BQ0UsUUFERkEsT0FDRTs7O0FBRUZELGVBQU9FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLGlCQUUzQjtBQUFBLGdCQURGQyxNQUNFLFNBREZBLE1BQ0U7OztBQUVGLGdCQUFJQSxXQUFXSCxNQUFmLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0MsUUFBUUcsS0FBUixDQUFjQyxPQUFmLElBQTBCSixRQUFRRyxLQUFSLENBQWNDLE9B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USIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI5ZDU1N2YwY2Y2ZDk4ZTNkN2U5IiwiaW1wb3J0IGNhcmRHZW5lcmF0aW9uIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5jb25zdCBzZXR1cE1lbnVEaXNwbGF5ID0gKGFycmF5KSA9PiB7XHJcblxyXG4gICAgYXJyYXkuZm9yRWFjaCgoe1xyXG4gICAgICAgIGJ1dHRvbixcclxuICAgICAgICBlbGVtZW50XHJcbiAgICB9KSA9PiB7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7XHJcbiAgICAgICAgICAgIHRhcmdldFxyXG4gICAgICAgIH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuc3R5bGUuZGlzcGxheSB8fCBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5jb25zdCBzZXR1cFN1Ykl0ZW1zTWVudURpc3BsYXkgPSAoYXJyYXksIHNldHRpbmdzKSA9PiB7XHJcblxyXG4gICAgYXJyYXkuZm9yRWFjaCgoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBzdWJFbGVtZW50XHJcbiAgICB9KSA9PiB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAncycpIHtcclxuXHJcbiAgICAgICAgICAgIHN1YkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0XHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ltZycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2tpcnQgPSB0YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2tpcnQgPSB0YXJnZXQuZGF0YXNldC5pZFxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkJykge1xyXG4gICAgICAgICAgICBzdWJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZGlmZmljdWx0eS5yID0gdGFyZ2V0LmRhdGFzZXQucm93cztcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmRpZmZpY3VsdHkuYyA9IHRhcmdldC5kYXRhc2V0LmNlbGxzO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5jb25zdCBjb250cm9sc0NvbnRyb2xsZXIgPSAodmFsdWUsIGVsZW1lbnRzKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudHNbZWxlbWVudHMuZmluZEluZGV4KGkgPT4gaS50eXBlID09PSBcInNcIildLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudHNbZWxlbWVudHMuZmluZEluZGV4KGkgPT4gaS50eXBlID09PSBcImRcIildLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGNvbnN0IGZ1bmMgPSB2YWx1ZSA9PT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcblxyXG4gICAgZm9yIChjb25zdCB7XHJcbiAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgIH0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0W2Z1bmNdKCctLWRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgY29udHJvbHNDb250cm9sbGVyRGF0YTtcclxuXHJcbmNvbnN0IHNldHVwTmV3R2FtZU1lbnVEaXNwbGF5ID0gKG5ld0dhbWVFbCwgbWVudUVsZW1lbnRzLCBzZXR0aW5ncykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBidXR0b25cclxuICAgIH0gPSBuZXdHYW1lRWw7XHJcblxyXG4gICAgY29udHJvbHNDb250cm9sbGVyRGF0YSA9IFsuLi5tZW51RWxlbWVudHMsIG5ld0dhbWVFbF07XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnRyb2xzQ29udHJvbGxlcih0cnVlLCBbLi4ubWVudUVsZW1lbnRzLCBuZXdHYW1lRWxdKTtcclxuXHJcbiAgICAgICAgY2FyZEdlbmVyYXRpb24oc2V0dGluZ3MpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgc2V0dXBNZW51RGlzcGxheSxcclxuICAgIHNldHVwU3ViSXRlbXNNZW51RGlzcGxheSxcclxuICAgIHNldHVwTmV3R2FtZU1lbnVEaXNwbGF5LFxyXG4gICAgY29udHJvbHNDb250cm9sbGVyLFxyXG4gICAgY29udHJvbHNDb250cm9sbGVyRGF0YVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NvdXJjZS9tZW51LmpzIiwiY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzdWl0KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnN1aXQgPSBzdWl0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2aXJ0dWFsQ2FyZCBleHRlbmRzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IociwgYywgdW5pcXVlSUQsIHR5cGUsIHN1aXQpIHtcclxuICAgICAgICBzdXBlcih0eXBlLCBzdWl0KTtcclxuICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgIHRoaXMuYyA9IGM7XHJcbiAgICAgICAgdGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc291cmNlL2NhcmQuanMiLCJpbXBvcnQge1xyXG4gICAgc2V0dXBNZW51RGlzcGxheSxcclxuICAgIHNldHVwU3ViSXRlbXNNZW51RGlzcGxheSxcclxuICAgIHNldHVwTmV3R2FtZU1lbnVEaXNwbGF5XHJcbn0gZnJvbSAnLi9tZW51J1xyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaW5zdHJ1Y3Rpb25zLWJ0bicpO1xyXG4gICAgaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaW5zdHJ1Y3Rpb25zJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbnN0cnVjdGlvbnMnKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuXHJcbiAgICBjb25zdCBfc2tpcnQgPSB7XHJcbiAgICAgICAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2tpcnRzLWJ1dHRvbicpLFxyXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1za2lydHMnKSxcclxuICAgICAgICBzdWJFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2tpcnQnKSxcclxuICAgICAgICB0eXBlOiAncydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZGlmZmljdWx0ID0ge1xyXG4gICAgICAgIGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpZmZpY3VsdGllcy1idXR0b24nKSxcclxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGlmZmljdWx0aWVzJyksXHJcbiAgICAgICAgc3ViRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpZmZpY3VsdHknKSxcclxuICAgICAgICB0eXBlOiAnZCdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbmV3R2FtZSA9IHtcclxuICAgICAgICBidXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uZXcnKSxcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE1lbnVEaXNwbGF5KFtfc2tpcnQsIF9kaWZmaWN1bHRdKTtcclxuICAgIHNldHVwU3ViSXRlbXNNZW51RGlzcGxheShbX3NraXJ0LCBfZGlmZmljdWx0XSwgc2V0dGluZ3MpO1xyXG4gICAgc2V0dXBOZXdHYW1lTWVudURpc3BsYXkoX25ld0dhbWUsIFtfc2tpcnQsIF9kaWZmaWN1bHRdLCBzZXR0aW5ncyk7XHJcblxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc291cmNlL2luZGV4LmpzIiwiaW1wb3J0IHZpcnR1YWxDYXJkIGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9zdG9wd2F0Y2gnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHJlcGxpY2F0ZUFycmF5LFxyXG4gICAgc2h1ZmZsZUFycmF5LFxyXG4gICAgZ2V0UmFuZG9tSW50LFxyXG4gICAgYXJyYXlUb01hdHJpeCxcclxuICAgIHVuaXF1ZUlELFxyXG4gICAgZWxlbWVudHNQb3NpdGlvblxyXG59IGZyb20gJy4vaGVscGVycydcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDQVJEU19UWVBFUyxcclxuICAgIENBUkRTX1NVSVRTLFxyXG4gICAgQ0FSRFNfUEFUSFxyXG59IGZyb20gJy4vY29uc3QnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgY29udHJvbHNDb250cm9sbGVyLFxyXG4gICAgY29udHJvbHNDb250cm9sbGVyRGF0YVxyXG59IGZyb20gJy4vbWVudSdcclxuXHJcbmxldCB1bmlxdWVDYXJkc0NvbnRhaW5lciA9IFtdO1xyXG5sZXQgY2FyZHNBcnJheSA9IFtdO1xyXG5sZXQgY2FyZHNNYXRyaXggPSBbXTtcclxuXHJcbmxldCBTVEFDSyA9IFtdO1xyXG5sZXQgU0NPUkU7XHJcblxyXG5jb25zdCBjaGVja9Chb2luY2lkZW5jZSA9IChTVEFDSykgPT4ge1xyXG5cclxuICAgIGlmIChTVEFDS1swXS5fY2xhc3MudW5pcXVlSUQgPT09IFNUQUNLWzFdLl9jbGFzcy51bmlxdWVJRCkge1xyXG5cclxuICAgICAgICBTQ09SRS0tO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zY29yZScpLmlubmVySFRNTCA9IFNDT1JFO1xyXG5cclxuICAgICAgICBTVEFDSy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC0tZm91bmQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIVNDT1JFKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdG9wd2F0Y2guc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbmdyYXR1bGF0aW9ucycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb25ncmF0dWxhdGlvbnMnKS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbmdyYXR1bGF0aW9ucy10aW1lJykuaW5uZXJIVE1MID0gc3RvcHdhdGNoLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbmdyYXR1bGF0aW9ucy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbmdyYXR1bGF0aW9ucy1idXR0b24nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXdhdGNoJykuaW5uZXJIVE1MID0gJzAwOjAwOjAwJztcclxuXHJcbiAgICBzdG9wd2F0Y2gucmVzZXQoKTtcclxuICAgIHN0b3B3YXRjaC51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHVuaXF1ZUNhcmRzQ29udGFpbmVyID0gW107XHJcbiAgICBjYXJkc0FycmF5ID0gW107XHJcbiAgICBjYXJkc01hdHJpeCA9IFtdO1xyXG4gICAgU1RBQ0sgPSBbXTtcclxuICAgIENBUkRTX1RZUEVTX0JVRkZFUiA9IFtdO1xyXG5cclxuICAgIGNvbnRyb2xzQ29udHJvbGxlcihmYWxzZSwgY29udHJvbHNDb250cm9sbGVyRGF0YSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbmdyYXR1bGF0aW9ucycpLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb25ncmF0dWxhdGlvbnMnKS5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbn1cclxuXHJcbmNvbnN0IGNhcmRTdHlsZSA9ICh7XHJcbiAgICBlbGVtZW50OiBwYXJlbnQsXHJcbiAgICBfY2xhc3NcclxufSwgc3R5bGUpID0+IHtcclxuXHJcbiAgICBjb25zdCBhY3Rpb24gPSBzdHlsZSA9PT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcblxyXG4gICAgcGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkX19iYWNrJykpIHtcclxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0W2FjdGlvbl0oJ2NhcmRfX2JhY2stLWhpZGUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9fZnJvbnQnKSkge1xyXG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3RbYWN0aW9uXSgnY2FyZF9fZnJvbnQtLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmxldCBpc1dhaXRDbGVhciA9IGZhbHNlO1xyXG5cclxuY29uc3QgY2xlYXJTdGFjayA9ICgpID0+IHtcclxuXHJcbiAgICB3aGlsZSAoU1RBQ0subGVuZ3RoKSB7XHJcbiAgICAgICAgY2FyZFN0eWxlKFNUQUNLLnBvcCgpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBhZGRUb1N0YWNrID0gKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICBsZXQgZWwgPSB7XHJcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICBfY2xhc3M6IGNhcmRzQXJyYXlbaW5kZXhdXHJcbiAgICB9O1xyXG5cclxuICAgIFNUQUNLLnB1c2goZWwpO1xyXG4gICAgY2FyZFN0eWxlKGVsLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoU1RBQ0subGVuZ3RoID09PSAyKSB7XHJcblxyXG4gICAgICAgIGlzV2FpdENsZWFyID0gIWlzV2FpdENsZWFyO1xyXG4gICAgICAgIGNoZWNr0KFvaW5jaWRlbmNlKFNUQUNLKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyU3RhY2soKTtcclxuICAgICAgICAgICAgaXNXYWl0Q2xlYXIgPSAhaXNXYWl0Q2xlYXI7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrT25TZWxmID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoU1RBQ0subGVuZ3RoKVxyXG4gICAgICAgIGlmIChjYXJkc0FycmF5W2luZGV4XSA9PT0gU1RBQ0tbMF0uX2NsYXNzKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuY29uc3Qgc3RhY2tDb250cm9sID0gKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcblxyXG4gICAgaWYgKFNUQUNLLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrT25TZWxmKGluZGV4KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBhZGRUb1N0YWNrKGluZGV4LCBlbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzV2FpdENsZWFyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2xlYXJTdGFjaygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgYWRkTGlzdGVuZXJPbkNhcmQgPSAoZWxlbWVudCkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoe1xyXG4gICAgICAgIGN1cnJlbnRUYXJnZXRcclxuICAgIH0pID0+IHtcclxuICAgICAgICBsZXQgY2FyZEluZGV4ID0gY2FyZHNBcnJheS5maW5kSW5kZXgoaSA9PiBpLnIgPT09IGN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb3cgJiYgaS5jID09PSBjdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2VsbCk7XHJcbiAgICAgICAgc3RhY2tDb250cm9sKGNhcmRJbmRleCwgY3VycmVudFRhcmdldCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkID0gKG1hdHJpeCwgc2tpcnQsIHIsIGMpID0+IHtcclxuXHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdtYWluX19jYXJkJywgJ2NhcmQnKTtcclxuICAgIHBhcmVudC5kYXRhc2V0LnJvdyA9IHI7XHJcbiAgICBwYXJlbnQuZGF0YXNldC5jZWxsID0gYztcclxuXHJcbiAgICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYWNrLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2JhY2snKTtcclxuICAgIGJhY2suc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtDQVJEU19QQVRIfXNraXJ0cy8ke3NraXJ0fS5wbmcpIG5vLXJlcGVhdGA7XHJcblxyXG4gICAgY29uc3QgZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2Zyb250Jyk7XHJcbiAgICBmcm9udC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0NBUkRTX1BBVEh9Y2FyZHMvJHttYXRyaXhbcl1bY10udHlwZX0ke21hdHJpeFtyXVtjXS5zdWl0fS5wbmcpIG5vLXJlcGVhdGBcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYmFjayk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJvbnQpO1xyXG5cclxuICAgIGFkZExpc3RlbmVyT25DYXJkKHBhcmVudCk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbl9fY29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVIVE1MID0gKG1hdHJpeCwgc2tpcnQpID0+IHtcclxuXHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IG1hdHJpeC5sZW5ndGg7IHIrKykge1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBnZW5lcmF0ZUNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IG1hdHJpeFtyXS5sZW5ndGg7IGMrKylcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZChtYXRyaXgsIHNraXJ0LCByLCBjKSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNhcmRzVHlwZUdlbmVyYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHdoaWxlICghZmxhZykge1xyXG5cclxuICAgICAgICBkYXRhID0gQ0FSRFNfVFlQRVNbZ2V0UmFuZG9tSW50KDAsIENBUkRTX1RZUEVTLmxlbmd0aCldO1xyXG4gICAgICAgIGxldCBjb2luY2lkZW5jZSA9IENBUkRTX1RZUEVTX0JVRkZFUi5pbmRleE9mKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAoY29pbmNpZGVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIENBUkRTX1RZUEVTX0JVRkZFUi5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBmbGFnID0gIWZsYWc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbn07XHJcblxyXG5sZXQgc3RvcHdhdGNoO1xyXG5sZXQgQ0FSRFNfVFlQRVNfQlVGRkVSID0gW107XHJcblxyXG5jb25zdCBjYXJkR2VuZXJhdGlvbiA9ICh7XHJcbiAgICBza2lydCxcclxuICAgIGRpZmZpY3VsdHk6IHtcclxuICAgICAgICByLFxyXG4gICAgICAgIGNcclxuICAgIH1cclxufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvdW50ID0gKHIgKiBjKSAvIDI7XHJcbiAgICBTQ09SRSA9IGNvdW50O1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zY29yZScpLmlubmVySFRNTCA9IFNDT1JFO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICB1bmlxdWVDYXJkc0NvbnRhaW5lci5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgdmlydHVhbENhcmQoXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIHVuaXF1ZUlEKCksXHJcbiAgICAgICAgICAgICAgICBjYXJkc1R5cGVHZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgQ0FSRFNfU1VJVFNbZ2V0UmFuZG9tSW50KDAsIENBUkRTX1NVSVRTLmxlbmd0aCldXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRzQXJyYXkgPSBzaHVmZmxlQXJyYXkocmVwbGljYXRlQXJyYXkodW5pcXVlQ2FyZHNDb250YWluZXIpKTtcclxuICAgIGNhcmRzTWF0cml4ID0gYXJyYXlUb01hdHJpeChjYXJkc0FycmF5LCBjKTtcclxuXHJcbiAgICBnZW5lcmF0ZUhUTUwoZWxlbWVudHNQb3NpdGlvbihjYXJkc01hdHJpeCksIHNraXJ0KTtcclxuXHJcbiAgICBzdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKCk7XHJcbiAgICBsZXQgd2F0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtd2F0Y2gnKVxyXG4gICAgc3RvcHdhdGNoLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgd2F0Y2guaW5uZXJIVE1MID0gc3RvcHdhdGNoLnN0YXRlO1xyXG4gICAgfSk7XHJcbiAgICBzdG9wd2F0Y2guc3RhcnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEdlbmVyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3NvdXJjZS9nYW1lLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcHdhdGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaG91cnMgPSAwO1xyXG4gICAgICAgIHRoaXMubWludXRlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICcwMDowMDowMCc7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdG9wID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmliZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzKys7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA+PSA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMubWludXRlcyA+PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2ssIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICcwMDowMDowMCc7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuaG91cnMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gKHRoaXMuaG91cnMgPyAodGhpcy5ob3VycyA+IDkgPyB0aGlzLmhvdXJzIDogJzAnICsgdGhpcy5ob3VycykgOiAnMDAnKSArICc6JyArICh0aGlzLm1pbnV0ZXMgPyAodGhpcy5taW51dGVzID4gOSA/IHRoaXMubWludXRlcyA6ICcwJyArIHRoaXMubWludXRlcykgOiBcIjAwXCIpICsgJzonICsgKHRoaXMuc2Vjb25kcyA+IDkgPyB0aGlzLnNlY29uZHMgOiAnMCcgKyB0aGlzLnNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zb3VyY2Uvc3RvcHdhdGNoLmpzIiwiaW1wb3J0IHZpcnR1YWxDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5jb25zdCByZXBsaWNhdGVBcnJheSA9IChhcnJheSkgPT4ge1xyXG5cclxuICAgIGxldCBjbG9uZUFyciA9IGFycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobmV3IHZpcnR1YWxDYXJkKG51bGwsIG51bGwsIGVsZW1lbnQudW5pcXVlSUQsIGVsZW1lbnQudHlwZSwgZWxlbWVudC5zdWl0KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gWy4uLmFycmF5LCAuLi5jbG9uZUFycl1cclxufVxyXG5cclxuY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLFxyXG4gICAgICAgIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcclxuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuXHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmNvbnN0IGFycmF5VG9NYXRyaXggPSAobGlzdCwgZWxlbWVudHNQZXJTdWJBcnJheSkgPT4ge1xyXG4gICAgbGV0IG1hdHJpeCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBrID0gLTE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGlmIChpICUgZWxlbWVudHNQZXJTdWJBcnJheSA9PT0gMCkge1xyXG4gICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgIG1hdHJpeFtrXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0cml4W2tdLnB1c2gobGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG5cclxuY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcblxyXG5jb25zdCB1bmlxdWVJRCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuXHJcbmNvbnN0IGVsZW1lbnRzUG9zaXRpb24gPSAoYXJyYXkpID0+IHtcclxuICAgIGZvciAobGV0IHIgaW4gYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBjIGluIGFycmF5W3JdKSB7XHJcbiAgICAgICAgICAgIGFycmF5W3JdW2NdLnIgPSByO1xyXG4gICAgICAgICAgICBhcnJheVtyXVtjXS5jID0gYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVwbGljYXRlQXJyYXksXHJcbiAgICBzaHVmZmxlQXJyYXksXHJcbiAgICBnZXRSYW5kb21JbnQsXHJcbiAgICBhcnJheVRvTWF0cml4LFxyXG4gICAgdW5pcXVlSUQsXHJcbiAgICBlbGVtZW50c1Bvc2l0aW9uXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc291cmNlL2hlbHBlcnMuanMiLCJjb25zdCBDQVJEU19QQVRIID0gJy4vaW1nLydcclxuY29uc3QgQ0FSRFNfVFlQRVMgPSBbJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICdqYWNrJywgJ3F1ZWVuJywgJ2tpbmcnLCAnYWNlJ107XHJcbmNvbnN0IENBUkRTX1NVSVRTID0gWydfb2ZfY2x1YnMnLCAnX29mX2RpYW1vbmRzJywgJ19vZl9oZWFydHMnLCAnX29mX3NwYWRlcyddO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENBUkRTX1BBVEgsXHJcbiAgICBDQVJEU19UWVBFUyxcclxuICAgIENBUkRTX1NVSVRTXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvc291cmNlL2NvbnN0LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgY29uc3RydWN0b3Ioc2tpcnQgPSBcIjBcIiwgZGlmZmljdWx0eSA9IHtcclxuICAgICAgICByOiAyLFxyXG4gICAgICAgIGM6IDVcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLnNraXJ0ID0gc2tpcnQ7XHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9zb3VyY2Uvc2V0dGluZ3MuanMiXSwic291cmNlUm9vdCI6IiJ9