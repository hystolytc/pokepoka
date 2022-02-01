import logo from 'assets/pokemon-logo.png'
import { Header as HeaderStyled } from 'components'
import { HeaderContent, Logo, Link } from './style'

interface Props {
  href?: string
}

export const Header: React.FC<Props> = ({ href }) => (
  <HeaderStyled>
    <HeaderContent>
      <Logo src={logo} alt='logo' width='100' height='40' />
      <Link href={href}>
        My Pokemon
      </Link>
    </HeaderContent>
  </HeaderStyled>
)