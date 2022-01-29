import { Layout as LayoutStyled } from './style'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => (
  <LayoutStyled>
    { children }
  </LayoutStyled>
)
