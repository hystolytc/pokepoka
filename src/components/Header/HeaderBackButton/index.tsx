import { Header } from '../index'
import { Container, Link } from './style'

interface Props {
  title?: string,
  goBack?: () => void
  goMyPokemon?: () => void
}

export const HeaderBackButton: React.FC<Props> = ({
  title,
  goBack,
  goMyPokemon
}) => (
  <Header>
    <Container>
      <Link onClick={goBack}>
        Back
      </Link>
      <span>{title}</span>
      <Link onClick={goMyPokemon}>
        My Pokemon
      </Link>
    </Container>
  </Header>
)