import { SOLUTION } from '../../utils/constants';

import tileNextToEmpty from './tileNextToEmpty';

const moveTile = (number: number, configuration: number[], setConfiguration: (updateConfiguration: number[]) => void) => {
  const indexTile = configuration.indexOf(number);
  const indexEmpty = configuration.indexOf(0);

  if (tileNextToEmpty(number, configuration)) {
    const updateConfiguration = [...configuration];
    updateConfiguration[indexTile] = 0;
    updateConfiguration[indexEmpty] = number;

    setConfiguration(updateConfiguration);

    if (JSON.stringify(updateConfiguration) === JSON.stringify(SOLUTION)) {
      alert('Congratulation! You solve the puzzle!');
    }
  }
}

export default moveTile;
