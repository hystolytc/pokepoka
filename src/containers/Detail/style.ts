import styled from '@emotion/styled'
import { color } from 'styles'

export const Image = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: contain;
  background-color: ${color.grey100};
`

export const Container = styled.div`
  padding: 1rem;
  text-transform: capitalize;
`

export const Name = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: .5rem;
  color: ${color.textPrimary};
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Type = styled.div`
  padding: 0 0.5rem;
  border: 1px solid;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  color: ${color.textPrimary};
`

export const Label = styled.h2`
  display: inline-block;
  padding: 0.25rem;
  background-color: ${color.yellow300};
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
`

export const List = styled.ul`
  padding-left: 1rem;
  list-style: none;
  margin-bottom: 1rem;

  & li {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
  }
`

export const Box = styled.span`
  padding: 0 0.5rem;
  font-weight: 400;
  border-radius: 0.25rem;
  color: ${color.white};
  background-color: ${color.black70};
  letter-spacing: 1px;
`

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Subtitle = styled.h3`
  display: inline-block;
  font-size: 1rem;
  border: 0 solid;
  border-color: ${color.red400};
  border-bottom-width: 0.25rem;
  margin-bottom: 0.5rem;
`