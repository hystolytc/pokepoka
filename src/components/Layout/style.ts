import styled from '@emotion/styled'
import { color } from 'styles'

const Layout = styled.div`
  position: relative;
  max-width: 480px;
  min-height: calc(100vh - 50px);
  margin-left: auto;
  margin-right: auto;
  background-color: ${color.white};
`

export { Layout }