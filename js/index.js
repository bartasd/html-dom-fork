import { headerData } from "./header.js";

export function header() {
    const navDOM = document.getElementsByTagName('nav');
    const titleDOM = document.getElementsByTagName('title');

    let HTML = '';
    for (const data of headerData) {
        if (titleDOM[0].innerText !== 'DOM events') {
            HTML += `<a class="link" href="${data.link}">${data.text}</a>`;
        } else {
            HTML += `<a class="link" href="${data.link.replace('..', '.')}">${data.text}</a>`
        }
    }
    navDOM[0].innerHTML = HTML;
}


// document.body.insertAdjacentHTML('afterbegin', HTML); insertAdjacentHTML(a, b) - palieka sena turini, o kur istatyti naujai sugenertuota nurodome a - kintamajame, b - HTML kuri norime istatyti.