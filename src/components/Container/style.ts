import styled from '@emotion/styled'

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin-bottom: 2rem;
  object-fit: contain;
`

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
`

export const TextNotFound = styled.p`
  font-size: 5rem;
  font-weight: 600;
`