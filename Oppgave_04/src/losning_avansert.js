import './styles.css';

/**
 *
 * En mer avansert løsning som genererer listen med tall,
 * lager en ny unik liste med tall om du har sortert riktig,
 * setter tilfeldig retning du må sortere
 *
 */

const numbersUl = document.getElementById('numbers');
const guessUl = document.getElementById('guess');
const descEl = document.getElementById('desc');
const button = document.querySelector('button');
let direction;
let numbers = [];
const directions = ['asc', 'desc'];

const generateRandomNumber = (uppperLimit, startValue) =>
  Math.floor(Math.random() * uppperLimit + startValue);

const generateNumber = (listLength) => {
  for (let i = 0; i < listLength; i++) {
    numbers.push(generateRandomNumber(90, 10));
  }
};

const setDirection = () => {
  return directions[generateRandomNumber(2, 0)];
};

const getGuess = () => {
  const answers = guessUl.querySelectorAll('input');
  return Array.from(answers).map((answer) => answer.value);
};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = false;
  if (direction === 'asc') {
    isCorrect = numbers.sort().join('') === guess.join('');
  } else {
    isCorrect = numbers.sort().reverse().join('') === guess.join('');
  }
  if (isCorrect) {
    resetUI();
    createUI(generateRandomNumber(3, 5));
  }
};

const addDescUI = (direction) => {
  descEl.innerHTML = `Sorter etter ${
    direction === 'asc' ? 'minste først' : 'største først'
  }`;
};

const addInputUI = () => {
  for (let number of numbers) {
    const li = `<li><input type="text" /></li>`;
    guessUl.innerHTML += li;
  }
};

const addNumbersUI = () => {
  for (let number of numbers) {
    const li = `<li>${number}</li>`;
    numbersUl.innerHTML += li;
  }
};

const resetUI = () => {
  numbers = [];
  numbersUl.innerHTML = null;
  guessUl.innerHTML = null;
};

const createUI = (number) => {
  direction = setDirection();
  generateNumber(number, 1);
  addDescUI(direction);
  addNumbersUI();
  addInputUI();
};

createUI(2);

button.addEventListener('click', checkNumberSeq);
