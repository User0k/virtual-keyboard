export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.caps = false;
  }

  init() {
    const { body } = document.body;
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
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keysRow = document.createElement('div');
    keysRow.classList.add('keyboard__keys-row');
    keyboard.append(keysRow);
    fragment.append(h1, textarea, keyboard, h2);
    body.append(this.fragment);
  }
}
