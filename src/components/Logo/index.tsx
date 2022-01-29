import styled from '@emotion/styled'
import logo from 'assets/pokemon-logo.png'

const Image = styled.img`
  height: 2.5rem;
  object-fit: contain;
`

export const Logo = () => (
  <Image src={logo} alt='logo' width='200' height='40' />
)
