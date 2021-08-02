import './styles.css';
// Lager variabler med default verdier til å starte med
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

// Lager en liste med ord brukeren skal skrive bokstavene til
const words = ['test', 'larsy', 'marius'];

// Henter #id-er og knappen fra HTMLen
const word = document.getElementById('word');
const wrongs = document.getElementById('wrongs');
const letter = document.getElementById('letter');
const button = document.querySelector('button');

// Lager HTML for ordet som skal skrives
const setWord = () => {
  // Skriver ut ordet eller setningen nedenfor hvis det ikke er flere ord igjen
  word.innerHTML = words[wordCounter] || `Ingen ord igjen`;
};

// Bytter til neste ord i den statiske "words" listen
const changeWord = () => {
  positionCounter = 0;
  wordCounter++;
  setWord();
};

// Sjekker om bokstaven vi skriver har rett plassering
// word = ordet vi skal skrive
// position = posisjonen vi nå er på (bokstaven vi skal skrive)
// letter = bokstaven vi har skrevet
const checkPosition = (word, position, letter) => {
  return word[position] === letter;
};

// Sjekker om vi har skrevet riktig ord
// Hvis posisjonen vi er på er lik lengden på ordet vi skal skrive så betyr det at vi har riktig ord
const wordIsCorrect = (word, position) => {
  return position === word.length;
};

// Hovedfunksjonen som brukes til å sjekke bokstaven, posisjonen og endre ordet
const handleKeyUp = ({ key }) => {
  // Henter ordet vi jobber med
  const word = words[wordCounter];
  // Sjekker om vi har rett bokstav og posisjon
  if (checkPosition(word, positionCounter, key)) {
    // Øker telleren for posisjonen slik at vi kan begynne å undersøke neste bokstav
    positionCounter++;
    if (wordIsCorrect(word, positionCounter)) {
      changeWord();
    }
  } else {
    // Hvis vi skriver feil øker vi verdien for antall feil
    wrongCounter++;
  }
  // Trigger oppdatering av grensesnittet for å vise antall feil, bokstaven vi skrev og stylingen på ordet vi skal gjette
  updateUI(key);
};

const updateUI = (key) => {
  // Sjekker om vi har flere ord igjen, isåfall oppdatere grensesnittet
  if (words[wordCounter]) {
    // Skriver ut antall feil
    wrongs.innerHTML = wrongCounter;
    // Skriver ut bokstaven vi har skrevet
    letter.innerHTML = key;
    // Gjør de bokstavene vi har skrevet riktig grønne
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`;
  }
};

// Lytter på om vi har trykket på en tast
window.addEventListener('keyup', handleKeyUp);
// Lytter til klipp på startknappen
button.addEventListener('click', () => {
  // Gjør at vi ikke kan trykke på knappen igjen
  button.disabled = true;
  // Setter første ord
  setWord();
});
