/* eslint-disable no-param-reassign */
const keyboardKeys = document.getElementsByTagName('button');

export default function renderKeys(lang) {
  [...keyboardKeys].forEach((key, i) => {
    const [buttonId] = Object.keys(lang[i]);
    console.log(key.textContent, lang[i][buttonId].keyText);
    key.textContent = lang[i][buttonId].keyText;
  });
}
