import { Container, Image, Text } from '../style'
import pokeballBroken from 'assets/pokeball-broken.png'

export const Error = () => (
  <Container>
    <Image src={pokeballBroken} alt='pokemon ball' width='100' height='100' />
    <Text>Woops, something went wrong!</Text>
  </Container>
)