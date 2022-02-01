import { useEffect } from 'react'
import pokeball from 'assets/loader.png'
import { Container, PokeballBounce, Span } from '../style'

interface Props {
  onAfter?: () => void
}

export const CatchProgress: React.FC<Props> = ({ onAfter=() => {} }) => {
  useEffect(() => {
    setTimeout(() => onAfter(), 3000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <Container>
      <PokeballBounce src={pokeball} alt='pokemon ball' width='50' height='50' />
      <Span>Catching the pokemon ...</Span>
    </Container>
  )
}