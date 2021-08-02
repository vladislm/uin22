import './styles.css';

// Henter ut HTML-elementene som skal brukes til å skrive ut tomme inputbokser og tallene som skal gjettes på
const numbersUl = document.getElementById('numbers');
const guessUl = document.getElementById('guess');
// Henter knappen for å kunne litt til klikk på denne
const button = document.querySelector('button');
// Lager en statisk liste med tall
const numbers = [12, 24, 10, 96, 15, 77, 88];

const getGuess = () => {
  // Henter alle input-feltene som
  const answers = guessUl.querySelectorAll('input');
  // Gjør om resultet fra .querySelectorAll til en "ekte" liste slik at vi kan bruke .map
  // Da hvert element i listen er et input kan vi hente ut .value
  return Array.from(answers).map((answer) => answer.value);
};

const checkNumberSeq = () => {
  // Bruker getGuess til å hente ut svarene
  const guess = getGuess();
  // Bruker den statiske listen med tall, sorterer denne og gjør den om til en string med .join("")
  // Sjekker om denne er lik stringen av svarene
  let isCorrect = numbers.sort().join('') === guess.join('');
  if (isCorrect) {
    alert('Du sorterte riktig');
  }
};

const addInputUI = () => {
  // Går over (itererer eller looper) alle tallene i numbers-listen slik at vi kan lage nok <li> med <input /> som antall tall
  // Kan bruke vanlig for loop også
  for (let number of numbers) {
    const li = `<li><input type="text" /></li>`;
    // Legger hvert li element til guessUl
    guessUl.innerHTML += li;
  }
};

const addNumbersUI = () => {
  // Går over (itererer eller looper) alle tallene i listen for å lage <li> med tallene som skal sorteres
  // Kan bruke vanlig for loop også
  for (let number of numbers) {
    const li = `<li>${number}</li>`;
    // Legger hvert li element til numbersUl
    numbersUl.innerHTML += li;
  }
};

// Genererer UI med tallene som skal sorteres og inputboksene
const createUI = () => {
  addNumbersUI();
  addInputUI();
};

// Trigger funksjonen umiddelbart for å skrive ut tallene som skal gjettes og inputboksene
createUI();

// Lytter til klikk på knappen. Klikk trigger funksjonen som sjekker om sorteringen er rett
button.addEventListener('click', checkNumberSeq);
