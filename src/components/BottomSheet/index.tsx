import styled from '@emotion/styled'
import { color } from 'styles'

const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${color.black70};

  & > div {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    max-width: 480px;
    padding: 1rem;
    overflow-y: auto;
    transform: translate(-50%, 0%);
    background-color: ${color.white};
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
`

interface Props {
  isOpen?: boolean
  children: React.ReactNode
}

export const BottomSheet: React.FC<Props> = ({ isOpen, children }) => !isOpen ? null : (
  <ModalStyled>
    <div>
      {children}
    </div>
  </ModalStyled>
)
