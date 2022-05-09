export default function renderDisplayH1() {
  const { body } = document;
  const h1 = document.createElement('h1');
  h1.textContent = 'Virtual keyboard (EN, RU support)';
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'display');
  textarea.setAttribute('id', 'display');
  body.append(h1, textarea);
}
