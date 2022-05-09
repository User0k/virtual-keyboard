import { FN_KEYS } from '../dictionary';

export default function prerenderRow(lang, start, end) {
  const row = document.createElement('div');
  row.classList.add('keyboard__keys-row');
  lang.slice(start, end).forEach((key) => {
    const [buttonId] = Object.keys(key);
    const button = document.createElement('button');
    button.setAttribute('data-key', buttonId);
    button.classList.add('keyboard__keys-key');
    if (FN_KEYS.includes(buttonId)) {
      button.classList.add('fn-key');
    }
    button.textContent = key[buttonId].keyText;
    row.append(button);
  });

  return row;
}
