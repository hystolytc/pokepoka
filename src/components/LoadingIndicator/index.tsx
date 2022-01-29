import loader from 'assets/loader.png'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;

  & img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    animation: rotate 0.5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingIndicator = () => (
  <Container>
    <img src={loader} alt='pokeball' width='50' height='30' />
  </Container>
)