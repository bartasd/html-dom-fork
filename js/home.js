const h1DOM = document.querySelector('h1');
const buttonDOM = document.querySelector('button');

function updateText() {
    h1DOM.textContent = 'Now it is GOOD MORNING!';
}

buttonDOM.addEventListener('click', updateText);

const introductionDOM = document.getElementsByClassName('introduction')[0];
const btnDOM = introductionDOM.getElementsByTagName('button');
const paragraphDOM = document.getElementById('paragraph');

function introduction(n = '_____') {
    paragraphDOM.insertAdjacentHTML('afterBegin', `<p>Hello, my name is ${n}</p>`);
}

for (const btn of btnDOM) {
    btn.addEventListener('click', () => introduction(btn.innerText));
}

// for (let i = 0; i < btnDOM.length; i++) {
//     btnDOM[i].addEventListener('click', () => introduction(btnDOM[i].innerText));
// }

// btnDOM[0].addEventListener('click', () => introduction(btnDOM[0].innerText));
// btnDOM[1].addEventListener('click', () => introduction(btnDOM[1].innerText));
// btnDOM[2].addEventListener('click', () => introduction(btnDOM[2].innerText));
// btnDOM[3].addEventListener('click', () => introduction(btnDOM[3].innerText));



