import prerenderRow from './helpers/prerenderRow';
import renderKeys from './helpers/renderKeys';
import { EN, RU } from './dictionary';

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.caps = false;
    this.display = document.querySelector('#display');
    this.pressedKeys = new Set();
  }

  multiplyRows(node, ...rowBorders) {
    for (let i = 0; i < rowBorders.length - 1; i += 1) {
      node.append(prerenderRow(this.lang, rowBorders[i], rowBorders[i + 1]));
    }
  }

  init() {
    const { body } = document;
    const h2 = document.createElement('h2');
    h2.textContent = 'The keyboard is created for Windows';
    const p = document.createElement('p');
    p.innerHTML = 'For switching the language use <code>leftShift</code> + <code>leftAlt</code> buttons';
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    this.multiplyRows(keyboard, 0, 14, 29, 42, 55, 64);
    body.append(keyboard, h2, p);
  }

  toggleLang() {
    if (this.lang === RU) {
      this.lang = EN;
      localStorage.setItem('lang', 'EN');
    } else {
      this.lang = RU;
      localStorage.setItem('lang', 'RU');
    }
    renderKeys(this.lang);
  }
}
