/* eslint-disable no-param-reassign */
const keyboardKeys = document.getElementsByTagName('button');

export default function renderKeys(lang, capsLock = false, shift = false) {
  [...keyboardKeys].forEach((key, i) => {
    const [buttonId] = Object.keys(lang[i]);
    if (!capsLock && !shift) {
      key.textContent = lang[i][buttonId].keyText;
    } else if (capsLock && !shift) {
      // key.textContent = lang[i][buttonId].caps;
      if (!key.classList.contains('fn-key')) {
        key.textContent = lang[i][buttonId].keyText.toUpperCase();
      }
    } else if (!capsLock && shift) {
      key.textContent = lang[i][buttonId].altText;
    } else if (capsLock && shift) {
      if (!key.classList.contains('fn-key')) {
        key.textContent = lang[i][buttonId].altText.toLowerCase();
      }
    }
  });
}
