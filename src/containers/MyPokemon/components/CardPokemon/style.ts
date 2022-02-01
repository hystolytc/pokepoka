import styled from '@emotion/styled'
import { color } from 'styles'

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;

  &:hover {
    background-color: ${color.grey100};
  }

  & a {
    flex: 1;
    display: flex;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    color: ${color.textPrimary};

    &:visited {
      color: ${color.textPrimary};
    }

    & img {
      width: 3.125rem;
      object-fit: contain;
    }

    & div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0.5rem 0 1rem;
    }
  }
`

export const PokemonGivenName = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  overflow:hidden;
  display:inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
`

export const PokemonName = styled(PokemonGivenName)`
  font-size: 0.75rem;
  font-weight: 400;
`