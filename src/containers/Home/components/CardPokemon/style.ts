import styled from '@emotion/styled'
import { color } from 'styles'

export const Card = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: ${color.textPrimary};
  
  &:hover {
    background-color: ${color.grey100};
  }

  &:visited {
    color: ${color.textPrimary};
  }
  
  & img {
    width: 3.125rem;
    object-fit: contain;
  }
    
`

export const Content = styled.div`
  flex: 1;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
`

export const Name = styled.p`
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  overflow:hidden;
  display:inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background-color: ${color.yellow300};
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 0.125rem;
  }

  & p {
    font-size: 0.75rem;
    font-weight: 400;
  }
`