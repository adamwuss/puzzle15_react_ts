import Styled from "./Tile.styled"
import { TileProps } from './Tile.types';

const Tile = ({ number }: TileProps)  => (
  <Styled.Tile>{number}</Styled.Tile>
)

export default Tile;