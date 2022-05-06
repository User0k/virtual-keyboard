import renderRow from './helpers/renderRow';

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.caps = false;
  }

  init() {
    const { body } = document;
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.textContent = 'Virtual keyboard (EN, RU support)';
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'display');
    textarea.setAttribute('id', 'display');
    textarea.setAttribute('cols', '90');
    textarea.setAttribute('rows', '15');
    const h2 = document.createElement('h2');
    h2.textContent = 'The keyboard is created for Windows';
    const p = document.createElement('p');
    p.innerHTML = 'For switching the language use <code>leftShift</code> + <code>leftAlt</code> buttons';
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.append(renderRow(this.lang, 0, 14));
    keyboard.append(renderRow(this.lang, 14, 29));
    keyboard.append(renderRow(this.lang, 29, 42));
    keyboard.append(renderRow(this.lang, 42, 55));
    keyboard.append(renderRow(this.lang, 55, 64));
    fragment.append(h1, textarea, keyboard, h2, p);
    body.append(fragment);
  }
}
