import { EN, RU } from './dictionary/index';

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.caps = false;
  }
}
