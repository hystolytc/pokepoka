import pokeballBroken from 'assets/pokeball-broken.png'
import { Button } from 'components'
import { Container, Pokeball, Span } from '../style'

interface Props {
  showing?: boolean
  onClick?: () => void
}

export const CatchFail: React.FC<Props> = ({ showing, onClick }) => {  
  return (
    <Container>
      <Pokeball src={pokeballBroken} alt='pokemon ball' width='50' height='50' />
      <Span>Failed to catch the pokemon</Span>
      <Button
        variant='secondary'
        size='sm'
        onClick={onClick}
      >
        Take another pokeball
      </Button>
    </Container>
  )
}