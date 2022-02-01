import { Button } from 'components'
import {
  Card,
  PokemonGivenName,
  PokemonName
} from './style'

interface Props {
  img?: string
  name?: string
  givenName?: string
  href?: string
  onRelease?: () => void
}

export const CardPokemon: React.FC<Props> = ({
  img,
  name, 
  givenName,
  href,
  onRelease
}) => (
  <Card>
    <a href={href}>
      <img
        src={img}
        alt={`${givenName} pokemon`}
        width='50'
        height='50' />

      <div>
        <PokemonGivenName>{givenName}</PokemonGivenName>
        <PokemonName>{name}</PokemonName>
      </div>
    </a>
    <Button
      type='wrap'
      variant='danger'
      size='xs'
      onClick={onRelease}
    >
      Release
    </Button>
  </Card> 
)