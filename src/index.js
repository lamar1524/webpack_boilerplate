import './style.scss';
import Favicon from './assets/favicon.png';
import 'url-search-params-polyfill';

export const getMocks = () => {
  const array = [];
  for (let i = 0; i < 150; i += 1) {
    array.push({
      id: i,
      trackArtist: `artistName${i}`,
      trackName: `trackName${i}`,
      src: 'https://picsum.photos/100/100',
    });
  }
  return array;
};
export const sliceMocks = (array, page) => {
  let realMocks = [];
  if (page === 0 || page === 1 || page === null) {
    realMocks = array.slice(0, 9);
  } else {
    realMocks = array.slice((page - 1) * 9, (page - 1) * 9 + 9);
  }
  return realMocks;
};
