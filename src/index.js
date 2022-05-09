import './index.scss';
import renderDisplayH1 from './helpers/renderDisplayH1';
import parseLocalStorage from './helpers/parseLocalStorage';
import renderKeys from './helpers/renderKeys';
import Keyboard from './Keyboard';

renderDisplayH1();
const keyboard = new Keyboard(parseLocalStorage());
keyboard.init();
const display = document.querySelector('#display');
display.focus();

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
  } else if (
    keyboard.pressedKeys.has('AltLeft') && keyboard.pressedKeys.has('ShiftLeft')
  ) {
    keyboard.toggleLang();
  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keyboard.shift = true;
    renderKeys(keyboard.lang, keyboard.caps, keyboard.shift);
  } else if (e.code === 'Enter') {
    display.setRangeText('\n', display.selectionStart, display.selectionEnd, 'end');
  } else if (e.code === 'Tab') {
    display.setRangeText('\t', display.selectionStart, display.selectionEnd, 'end');
  } else if (e.code === 'Backspace') {
    const start = display.selectionStart;
    display.value = display.value.slice(0, start - 1) + display.value.slice(start);
    display.selectionStart = display.selectionEnd;
  } else if (e.code === 'Delete') {
    const start = display.selectionStart;
    display.value = display.value.slice(0, start) + display.value.slice(start + 1);
    display.selectionEnd = start;
  } else if (!key.classList.contains('fn-key')) {
    display.setRangeText(key.textContent, display.selectionStart, display.selectionEnd, 'end');
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`button[data-key=${e.code}]`);
  if (e.code !== 'CapsLock') {
    key.classList.remove('active');
  }
  keyboard.pressedKeys.delete(e.code);
  if (
    (e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !keyboard.pressedKeys.has('ShiftLeft') && !keyboard.pressedKeys.has('ShiftRight')) {
    keyboard.shift = false;
    renderKeys(keyboard.lang, keyboard.caps);
  }
});

document.addEventListener('mousedown', (e) => {
  const keyId = e.target.dataset.key;
  if (keyId === 'CapsLock') {
    e.target.classList.toggle('active');
    if (!keyboard.caps) {
      keyboard.caps = true;
    } else {
      keyboard.caps = false;
    }
    renderKeys(keyboard.lang, keyboard.caps);
  } else if (keyId === 'ShiftLeft' || keyId === 'ShiftRight') {
    keyboard.shift = true;
    renderKeys(keyboard.lang, keyboard.caps, keyboard.shift);
  } else if (keyId === 'Enter') {
    display.setRangeText('\n', display.selectionStart, display.selectionEnd, 'end');
    display.focus();
  } else if (keyId === 'Tab') {
    display.setRangeText('\t', display.selectionStart, display.selectionEnd, 'end');
    display.focus();
  } else if (keyId === 'Backspace') {
    const start = display.selectionStart;
    display.value = display.value.slice(0, start - 1) + display.value.slice(start);
    display.selectionStart = display.selectionEnd;
    display.focus();
  } else if (keyId === 'Delete') {
    const start = display.selectionStart;
    display.value = display.value.slice(0, start) + display.value.slice(start + 1);
    display.selectionStart = start;
    display.focus();
  } else if (
    e.target.classList.contains('keyboard__keys-key') && !e.target.classList.contains('fn-key')) {
    display.focus();
    display.setRangeText(e.target.textContent, display.selectionStart, display.selectionEnd, 'end');
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.dataset.key === 'ShiftLeft' || e.target.dataset.key === 'ShiftRight') {
    keyboard.shift = false;
    renderKeys(keyboard.lang, keyboard.caps);
  }
});
