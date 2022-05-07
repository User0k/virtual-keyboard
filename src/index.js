import './index.scss';
import renderDisplayH1 from './helpers/renderDisplayH1';
import { EN, RU } from './dictionary/index';
import Keyboard from './Keyboard';

renderDisplayH1();
const keyboard = new Keyboard(localStorage.getItem('lang') ?? EN);
keyboard.init();
