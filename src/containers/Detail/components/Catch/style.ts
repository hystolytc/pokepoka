import styled from '@emotion/styled'
import { color } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  transition: height 0.5s;
  text-align: center;
`

export const Pokeball = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  object-fit: cover;
`

export const PokeballBounce = styled(Pokeball)`
  animation: bounce 1.5s cubic-bezier(0.280, 0.840, 0.420, 1) infinite;
  @keyframes bounce {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-50px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }
`

export const Span = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`

export const FormInput = styled.form`
  width: 60%;
  margin-bottom: 1rem;

  & input {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.875rem;
    border-radius: 4px;
    border-width: 2px;
    outline: none;
  }

  & label {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${color.red600};
  }
`