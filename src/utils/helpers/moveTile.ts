import { Tile, BoardNumbers } from 'components/Game/Game.types';

import { SOLUTION } from 'utils/constants';

import tileNextToEmpty from './tileNextToEmpty';

const moveTile = (tile: Tile, configuration: BoardNumbers, setConfiguration: (updateConfiguration: BoardNumbers) => void) => {
  const indexTile = configuration.indexOf(tile);
  const indexEmpty = configuration.indexOf(0);

  if (tileNextToEmpty(tile, configuration)) {
    const updateConfiguration = [...configuration];
    updateConfiguration[indexTile] = 0;
    updateConfiguration[indexEmpty] = tile;

    setConfiguration(updateConfiguration);

    if (JSON.stringify(updateConfiguration) === JSON.stringify(SOLUTION)) {
      alert('Congratulation! You solve the puzzle!');
    }
  }
}

export default moveTile;
