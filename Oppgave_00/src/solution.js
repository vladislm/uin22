// Oppgave 1

const textToRemove = document.getElementById('remove');
const removeBtn = document.getElementById('remove-btn');

const removeText = () => {
  textToRemove.innerHTML = null;
};

removeBtn.addEventListener('click', removeText);

// Oppgave 2

const textToChange = document.getElementById('change');
const changeBtn = document.getElementById('change-btn');

const changeText = () => {
  textToChange.innerHTML = 'Ny tekst';
};

changeBtn.addEventListener('click', changeText);

// Oppgave 3

const inputText = document.getElementById('input-text');
const input = document.getElementById('input');

const removeDefaultText = () => {
  inputText.innerHTML = null;
};

removeDefaultText();

const updateUi = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

input.addEventListener('keyup', updateUi);

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const ul = document.getElementById('ul');
const writeBtn = document.getElementById('write-list');

const createLi = () => {
  const liElements = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = liElements.join('');

  // Eller
  myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));
};

writeBtn.addEventListener('click', createLi);

// Oppgave 5

const text = document.getElementById('text');
const createBtn = document.getElementById('create');
const select = document.getElementById('select');
const htmlPlaceHolder = document.getElementById('placeholder');

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

createBtn.addEventListener('click', createElement);

// Oppgave 6

// Alternativ 1 - mest læring men unødvendig
const parentUl = document.getElementById('list');
const removeLiBtn = document.getElementById('remove-li');

const removeLiFromParent = () => {
  const lastElement = parentUl.lastElementChild;
  if (lastElement) {
    parentUl.removeChild(lastElement);
  }
};

removeLiBtn.addEventListener('click', removeLiFromParent);

// Oppgave 7

const inputName = document.getElementById('name');
const orderBtn = document.getElementById('order');

const handleKeyUp = () => {
  const name = inputName.value;
  if (name && name.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = 'border: 1px solid red';
  } else {
    orderBtn.disabled = false;
    orderBtn.style = 'border: 1px solid black';
  }
};

inputName.addEventListener('keyup', handleKeyUp);

// Oppgave 8

const ulParent = document.querySelector('.children');
const ulParentChildren = ulParent.querySelectorAll('li');
const colorBtn = document.getElementById('color');

const addBorder = () => {
  Array.from(ulParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 1px solid pink; margin-bottom: 10px; padding: 5px;';
    } else {
      li.style = 'border: 1px solid green; margin-bottom: 10px; padding: 5px;';
    }
  });
};

colorBtn.addEventListener('click', addBorder);
