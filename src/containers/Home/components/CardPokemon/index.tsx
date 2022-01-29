import { Container, Title, Subtitle } from './style'

interface Props {
  name: string
  ownedTotal: number
}

export const CardPokemon: React.FC<Props> = ({ name, ownedTotal }) => (
  <Container>
    <Title>{name}</Title>
    <Subtitle>You owned {ownedTotal || 0}</Subtitle>
  </Container>
)