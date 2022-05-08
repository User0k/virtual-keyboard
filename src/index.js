import './index.scss';
import renderDisplayH1 from './helpers/renderDisplayH1';
import { EN, RU } from './dictionary/index';
import Keyboard from './Keyboard';

renderDisplayH1();
const keyboard = new Keyboard(localStorage.getItem('lang') ?? EN);
keyboard.init();
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const key = document.querySelector(`button[data-key=${e.code}]`);
  key.classList.add('active');
  keyboard.pressedKeys.add(e.code);
});
document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`button[data-key=${e.code}]`);
  key.classList.remove('active');
  keyboard.pressedKeys.delete(e.code);
});
