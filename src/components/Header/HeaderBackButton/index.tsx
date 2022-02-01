import { Header } from '../index'
import { Container, Link } from './style'

interface Props {
  title?: string,
  showMyPokemonLink?: boolean
  goBack?: () => void
  goMyPokemon?: () => void
}

export const HeaderBackButton: React.FC<Props> = ({
  title,
  showMyPokemonLink,
  goBack,
  goMyPokemon
}) => (
  <Header>
    <Container>
      <Link onClick={goBack}>
        Back
      </Link>
      <span>{title}</span>
      {showMyPokemonLink &&
        <Link onClick={goMyPokemon}>
          My Pokemon
        </Link>
      }
    </Container>
  </Header>
)