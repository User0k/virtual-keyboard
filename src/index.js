import './index.scss';
import renderDisplayH1 from './helpers/renderDisplayH1';
import parseLocalStorage from './helpers/parseLocalStorage';
import renderKeys from './helpers/renderKeys';
import Keyboard from './Keyboard';

renderDisplayH1();
const keyboard = new Keyboard(parseLocalStorage());
keyboard.init();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const key = document.querySelector(`button[data-key=${e.code}]`);
  key.classList.add('active');
  keyboard.pressedKeys.add(e.code);
  if (keyboard.pressedKeys.has('CapsLock')) {
    const caps = document.querySelector('button[data-key=CapsLock]');
    if (!keyboard.caps) {
      keyboard.caps = true;
    } else {
      keyboard.caps = false;
      caps.classList.remove('active');
    }
    renderKeys(keyboard.lang, keyboard.caps);
  } else if (keyboard.pressedKeys.has('AltLeft') && keyboard.pressedKeys.has('ShiftLeft')) {
    keyboard.toggleLang();
  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keyboard.shift = true;
    renderKeys(keyboard.lang, keyboard.caps, keyboard.shift);
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`button[data-key=${e.code}]`);
  if (e.code !== 'CapsLock') {
    key.classList.remove('active');
  }
  keyboard.pressedKeys.delete(e.code);
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !keyboard.pressedKeys.has('ShiftLeft') && !keyboard.pressedKeys.has('ShiftRight')) {
    keyboard.shift = false;
    renderKeys(keyboard.lang, keyboard.caps);
  }
});

document.addEventListener('click', (e) => {
  const keyId = e.target.dataset.key;
  if (keyId === 'CapsLock') {
    e.target.classList.toggle('active');
    if (!keyboard.caps) {
      keyboard.caps = true;
    } else {
      keyboard.caps = false;
    }
    renderKeys(keyboard.lang, keyboard.caps);
  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keyboard.shift = true;
    renderKeys(keyboard.lang, keyboard.caps, keyboard.shift);
  }
});
