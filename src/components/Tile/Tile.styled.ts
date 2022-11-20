import styled from 'styled-components';

import { TileProps } from './Tile.types';

const Tile = styled.div<Pick<TileProps, "number" | "cursorStyle">>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #f4db87;
  border-radius: 5px;
  font-size: 25px;
  margin: 5px;
  user-select: none;
  opacity: ${({ number }) => number ? 100 : 0};
  cursor:  ${({ cursorStyle }) => cursorStyle ? "pointer" : "default"};
`

export default {
  Tile,
}
