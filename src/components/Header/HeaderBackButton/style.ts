import styled from '@emotion/styled'
import { color } from 'styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  text-transform: capitalize;

  & span {
    flex: 1;
    color: ${color.white};
    margin: 0 1rem;
    font-weight: 700;
    overflow:hidden;
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & button:last-child {
    white-space: nowrap;
  }
`

export const Link = styled.a`
  height: 1.875rem;
  font-size: 0.75rem;
  color: ${color.textPrimary};
  background-color: ${color.white};
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0 1rem;
  line-height: 1.875rem;
`