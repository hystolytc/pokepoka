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

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
  object-fit: contain;
`

export const Span = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1rem;

  & strong {
    text-transform: capitalize;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`
