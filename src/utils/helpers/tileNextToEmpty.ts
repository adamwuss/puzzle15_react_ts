import { Tile, BoardNumbers } from 'components/Game/Game.types';

const tileNextToEmpty = (tile: Tile, actualConfiguration: BoardNumbers) => {
  const indexTile = actualConfiguration.indexOf(tile);
  const indexZero = actualConfiguration.indexOf(0);

  if (indexTile === (indexZero - 1) && ![0, 4, 8, 12].includes(indexZero)) {
    return true;
  } else if (indexTile === (indexZero + 1) && ![3, 7, 11, 15].includes(indexZero)) {
    return true;
  } else if (indexTile === (indexZero - 4)) {
    return true;
  } else if (indexTile === (indexZero + 4)) {
    return true;
  }
  return false;
}

export default tileNextToEmpty;
