import { BoardNumbers } from 'components/Game/Game.types';

import { findAvailableIndexes } from './index';

const shuffleArray = (array: BoardNumbers) => {
  const copyArray = JSON.parse(JSON.stringify(array));
  let currentIndex = 1000;

  while (currentIndex !== 0) {
    const indexZero = copyArray.indexOf(0);
    const availableIndexes = [...findAvailableIndexes(indexZero)];
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    const indexAvailable = availableIndexes[randomIndex];

    [copyArray[indexZero], copyArray[indexAvailable]] = [copyArray[indexAvailable], copyArray[indexZero]];

    currentIndex--;
  }

  return copyArray;
}

export default shuffleArray;
