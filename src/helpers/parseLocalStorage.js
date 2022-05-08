import { EN, RU } from '../dictionary';

export default function parseLocalStorage() {
  if (localStorage.getItem('lang') === 'RU') return RU;
  return EN;
}
