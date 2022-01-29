import styled from '@emotion/styled'
import { color } from 'styles'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: 480px;
  background-color: ${color.red400};
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: sticky;
  top: 0px;
  z-index: 10;
`