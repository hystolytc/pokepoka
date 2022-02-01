import { Container, Image, Text } from '../style'
import pokeball from 'assets/loader.png'

interface Props {
  text?: string
}

export const Empty: React.FC<Props> = ({ text }) => (
  <Container>
    <Image src={pokeball} alt='pokemon ball' width='100' height='100' />
    <Text>{text}</Text>
  </Container>
)