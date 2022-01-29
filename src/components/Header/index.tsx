import { Header as HeaderStyled } from './style'

interface Props {
  children: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => (
  <HeaderStyled>
    { children }
  </HeaderStyled>
)