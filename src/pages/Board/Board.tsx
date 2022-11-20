import Styled from "./Board.styled"
import Tile from '../../components/Tile/Tile';
import { SOLUTION } from '../../utils/constants/solution.js';

const Board = () => (
  <Styled.Board>
    {SOLUTION.map((number) => <Tile key={number} number={number} />)}
  </Styled.Board>
)

export default Board;