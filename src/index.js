import './index.scss';
import renderDisplayH1 from './helpers/renderDisplayH1';
import parseLocalStorage from './helpers/parseLocalStorage';
import Keyboard from './Keyboard';
import { EN, RU } from './dictionary';

renderDisplayH1();
const keyboard = new Keyboard(parseLocalStorage());
keyboard.init();
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const key = document.querySelector(`button[data-key=${e.code}]`);
  key.classList.add('active');
  keyboard.pressedKeys.add(e.code);
  if (keyboard.pressedKeys.has('AltLeft') && keyboard.pressedKeys.has('ShiftLeft')) {
    keyboard.toggleLang();
    console.log(keyboard.lang);
  }
});
document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`button[data-key=${e.code}]`);
  key.classList.remove('active');
  keyboard.pressedKeys.delete(e.code);
});
