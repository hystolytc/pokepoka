import pokeballBroken from 'assets/pokeball-broken.png'
import { Button } from 'components'
import { Container, Pokeball, Span } from '../style'

interface Props {
  onClick?: () => void
}

export const CatchFail: React.FC<Props> = ({ onClick }) => {  
  return (
    <Container>
      <Pokeball src={pokeballBroken} alt='pokemon ball' width='50' height='50' />
      <Span>Woops, you almost catch the pokemon</Span>
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