import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from 'styles'

interface Props {
  size: string
  variant: string
  buttonType: string
}

const variant = (value: string) => {
  const variantValue: Record<string, any> = {
    primary: css`
      background-color: ${color.red400};
      color: ${color.white};
    `,
    secondary: css`
      background-color: ${color.white};
      color: ${color.red400};
      border: 1px solid ${color.red400};
    `,
    danger: css`
      background-color: ${color.red600};
      color: ${color.white};
    `,
    disabled: css`
      background-color: ${color.grey400};
      color: ${color.white};
    `

  }
  return variantValue[value]
}

const size = (size: string) => {
  const sizeValue: Record<string, any> = {
    md: css`
      height: 3.125rem;
      font-size: 1rem;
    `,
    sm: css`
      height: 2.5rem;
      font-size: 0.875rem;
    `,
    xs: css`
      height: 1.875rem;
      font-size: 0.75rem;
    `
  }
  return sizeValue[size]
}

const type = (value: string) => {
  const typeValue: Record<string, any> = {
    stretch: css`
      width: 100%;
    `,
    wrap: css`
      padding: 0 1rem;
    `
  }
  return typeValue[value]
}

const base = css`
  border-radius: 4px;
  font-weight: 600;
  border: 0;
`

export const ButtonStyled = styled.button<Props>`
  ${base}
  ${props => size(props.size)}
  ${props => variant(props.variant)}
  ${props => type(props.buttonType)}
`

export const ContainerStickyBottom = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: ${color.white};
`