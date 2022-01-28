// import './styles.css';
import {users} from './util.js';

// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

const usersUL = document.getElementById("users");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");

function cleanList(parent) {
    const liEl = Array.from(parent.getElementsByTagName('li'));
    for (let i = liEl.length - 1; i >= 0; i--) {
        liEl[i].remove();
    }
}

function displayUsers(list, parent) {
    cleanList(parent);
    list.forEach((el) => {
        let liEl = document.createElement('li');
        liEl.innerText = `${el.name} - ${el.age}`;
        parent.appendChild(liEl);
    })
}

function filterByName(data, name) {
    const filtered = [];
    if (name === "") {
        return data;
    }
    data.forEach((el) => {
        if (el.name === name) {
            filtered.push(el);
        }
    })
    return filtered;
}

function filterByAge(data, age) {
    if (age <= 0) {
        return users
    }
    const filtered = [];
    data.forEach((el) => {
        if (el.age >= age) {
            filtered.push(el);
        }
    })
    return filtered;
}

displayUsers(users, usersUL);

function applyAllFilters(dataSet) {
    let name = nameInput.value;
    let data = filterByName(dataSet, name);
    if (ageInput.value === "") {
        return data
    }
    const age = Number.parseInt(ageInput.value);
    data = filterByAge(data, age);
    return data;
}

function search() {
    const data = applyAllFilters(users);
    displayUsers(data, usersUL);
}


nameInput.addEventListener('input', search);
filterBtn.addEventListener('click', search);

