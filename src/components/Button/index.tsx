import { ButtonStyled } from './style'

type buttonType = 'wrap' | 'stretch'
type size = 'md' | 'sm' | 'xs'
type variant = 'primary' | 'secondary' | 'danger' | 'disabled'

interface Props {
  variant?: variant
  type?: buttonType
  size?: size
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: React.FC<Props> = ({
  type = 'wrap',
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  children
}) => (
  <ButtonStyled
    buttonType={type}
    variant={disabled ? 'disabled' : variant}
    size={size}
    onClick={onClick}
    disabled={disabled}
  >
    { children }
  </ButtonStyled>
)

export * from './ButtonStickyBottom'