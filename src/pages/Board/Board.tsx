import { useEffect, useState } from 'react';

import { Tile } from 'components';
import { SOLUTION } from 'utils/constants';
import { shuffleArray, tileNextToEmpty, moveTile } from 'utils/helpers';

import Styled from './Board.styled';

const Board = () => {
  const [configuration, setConfiguration] = useState(SOLUTION);

  useEffect(() => {
    setConfiguration(shuffleArray(SOLUTION));
  }, []);

  return (
    <Styled.Board>
      {configuration.map((number) => (
          <Tile
            key={number}
            number={number}
            cursorStyle={tileNextToEmpty(number, configuration)}
            onClick={() => moveTile(number, configuration, setConfiguration)}
          />
        )
      )}
    </Styled.Board>
  );
}

export default Board;
