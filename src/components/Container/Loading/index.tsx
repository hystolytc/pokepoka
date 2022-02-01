import { Container, Image, Text } from '../style'
import pokeball from 'assets/loader.png'

export const Loading = () => (
  <Container>
    <Image src={pokeball} alt='pokemon ball' width='100' height='100' />
    <Text>Loading...</Text>
  </Container>
)