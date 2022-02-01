import styled from '@emotion/styled'
import { color } from 'styles'

export const HeaderContent = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a`
  position: absolute;
  right: 16px;
  height: 1.875rem;
  font-size: 0.75rem;
  color: ${color.textPrimary};
  background-color: ${color.white};
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0 1rem;
  line-height: 1.875rem;
`