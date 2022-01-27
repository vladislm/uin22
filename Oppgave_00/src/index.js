// Oppgave 1
const bt1 = document.getElementById("remove-btn");
const textArea = document.getElementById("remove");

function removeInnerText() {
    textArea.innerText = "";
}

bt1.addEventListener('click', removeInnerText);

// Oppgave 2
const btn2 = document.getElementById("change-btn");
const areaToChange = document.getElementById("change");
btn2.addEventListener('click', () => {
    areaToChange.innerText = "Hello, Vlad! :P";
})

// Oppgave 3
const inputArea = document.getElementById("input");
const inputText = document.getElementById("input-text");

function changeText() {
    inputText.innerText = inputArea.value;
}

inputArea.addEventListener('input', changeText);


// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const btn3 = document.getElementById("write-list");
const list = document.getElementById('ul');

function addElements() {
    myList.forEach(el => {
        let liEl = document.createElement('li');
        liEl.innerText = el;
        list.appendChild(liEl)
    })
}

btn3.addEventListener('click', addElements);

// Oppgave 5
const selectOp = document.getElementById("select");
const text = document.getElementById('text');
const createElBtn = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

function createHtmlEl() {
    const el = selectOp.value;
    const inputVal = text.value;

    const htmlEl = document.createElement(el);
    htmlEl.innerText = inputVal;
    placeholder.appendChild(htmlEl);
}

createElBtn.addEventListener('click', createHtmlEl)

// Oppgave 6
const listOpg6 = document.getElementById("list");
const cleanListBtn = document.getElementById("remove-li");

function removeLiEl() {
    const liArr = listOpg6.getElementsByTagName('li');
    for (let i = liArr.length - 1; i >= 0; i--) {
        liArr[i].remove()
    }
}

cleanListBtn.addEventListener('click', removeLiEl)

// Oppgave 7
const nameInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

function validateInput() {
    if (nameInput.value.length > 4) {
        orderBtn.disabled = true;
    }
    nameInput.value.length > 4 ? orderBtn.disabled = true : orderBtn.disabled = false;
}

nameInput.addEventListener('input', validateInput);

// Oppgave 8
const childrenLi = document.querySelector(".children");
const colorBtn = document.getElementById("color");

function colorLi() {
    const liArr = Array.from(childrenLi.getElementsByTagName('li'));
    liArr.forEach((el) => {
        el.style.border = "red solid 1px";
    })
}

colorBtn.addEventListener('click', colorLi)
