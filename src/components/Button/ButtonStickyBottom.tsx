import { Button } from './index'
import { ContainerStickyBottom } from './style'

interface Props {
  onClick?: () => void
  children?: React.ReactNode
}

export const ButtonStickyBottom: React.FC<Props> = ({ onClick, children }) => (
  <ContainerStickyBottom>
    <Button
      type='stretch'
      onClick={onClick}
    >
      { children }
    </Button>
  </ContainerStickyBottom>
)