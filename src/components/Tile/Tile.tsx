import Styled from "./Tile.styled"
import { TileProps } from './Tile.types';

const Tile = ({ number, cursorStyle, onClick }: TileProps)  => (
  <Styled.Tile
    number={number}
    cursorStyle={cursorStyle}
    onClick={onClick}
  >
    {number}
  </Styled.Tile>
)

export default Tile;
