import './index.scss';
import { EN, RU } from './dictionary/index';
import Keyboard from './Keyboard';

const keyboard = new Keyboard(EN);
keyboard.init();
