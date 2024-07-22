const buttonsDOM = document.querySelectorAll('button');
const minusDOM1 = buttonsDOM[0];
const minusDOM2 = buttonsDOM[1];
const minusDOM3 = buttonsDOM[2];
const plusDOM1 = buttonsDOM[3];
const plusDOM2 = buttonsDOM[4];
const plusDOM3 = buttonsDOM[5];
const resultDOM = document.querySelector('.one > div');

let total = 0;

function update(coof = 0) {
    total += coof;
    resultDOM.textContent = total;
}

minusDOM1.addEventListener('click', () => update(-1));
minusDOM2.addEventListener('click', () => update(-2));
minusDOM3.addEventListener('click', () => update(-3));

plusDOM1.addEventListener('click', () => update(1));
plusDOM2.addEventListener('click', () => update(2));
plusDOM3.addEventListener('click', () => update(3));

