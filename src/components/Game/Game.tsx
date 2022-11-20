import { useEffect, useState } from 'react';

import { Tile } from 'components/index';
import { SOLUTION } from 'utils/constants';
import { shuffleArray, tileNextToEmpty, moveTile } from 'utils/helpers';

import Styled from './Game.styled';
import { BoardNumbers } from './Game.types';

const Game = () => {
  const [configuration, setConfiguration] = useState<BoardNumbers>(SOLUTION);

  useEffect(() => {
    setConfiguration(shuffleArray(SOLUTION));
  }, []);

  return (
    <Styled.Game>
      {configuration.map((number) => (
          <Tile
            key={number}
            number={number}
            cursorStyle={tileNextToEmpty(number, configuration)}
            onClick={() => moveTile(number, configuration, setConfiguration)}
          />
        )
      )}
    </Styled.Game>
  );
}

export default Game;
