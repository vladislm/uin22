import './styles.css';
// Importerer en generert liste med brukere
import { users } from './util';

// Henter HTML-idene vi trenger
const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

// Lager tabellen med  brukere
const createTableUI = (users) => {
  // Nuller ut HTML-en for å unngå å få duplikater
  userUl.innerHTML = null;
  // Lager "headeren" til tabellen
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  // Går over alle brukerene i users-listen
  // Skriver ut id, navn og alder med template literals
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// Håndterer søket når brukeren skriver i søkeboksen
const handleSearch = () => {
  // Henter ut verdien brukeren har skrevet i søkeboksen (.value)
  const searchName = searchInput.value;
  // Sjekker om verdien finnes (ikke vits å søke hvis den er tom)
  if (searchName) {
    // Bruker .find for å finne den brukeren som har det navnet vi søker etter
    // Gjør om alt til lowerCase for å gjøre søket "bedre"
    const searchResult = users.find(
      (user) => user.name.toLowerCase() === searchName.toLowerCase()
    );
    // Hvis resultatet inneholder en bruker så sender vi denne brukeren (som liste []) til createTableUI
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      // Hvis vi ikke finner noen bruker skriver vi ut en melding istedenfor listen med brukere
      userUl.innerHTML = `Fant ingen med navn ${searchName}`;
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
  // Henter ut verdien vi har skrevet i filterboksen
  const filterValue = filterInput.value;
  // Sjekker om filterverdien finnes og er et tall (hvis ikke så viser vi den standard listen)
  if (filterValue && Number(filterValue)) {
    const filterResult = users.filter((user) => user.age > filterValue);
    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = `Fant ingen over ${filterValue} år`;
    }
  } else {
    // Skriv ut default liste om filterverdien er tom
    createTableUI(users);
  }
};

// Brukes til å sette listen med brukere når applikasjonen starter
const main = () => {
  createTableUI(users);
};

main();

// Lytter til tastatur på søkeboksen og trigger søkefunksjonen
searchInput.addEventListener('keyup', handleSearch);
// Lytter til klikk på filterknappen og trigger filterfunksjonen
filterButton.addEventListener('click', handleFilter);
