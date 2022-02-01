import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Button, ButtonStickyBottom } from '../index'

const describeButtonComponent = '<Button /> test case'
describe(describeButtonComponent, () => {
  const { container } = render(
    <Button
      type='stretch'
      variant='primary'
      size='sm'
      onClick={() => {}}
    >
      Button test
    </Button>
  )

  test(`Render ${describeButtonComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})

const describeButtonStickyBottomComponent = '<ButtonStickyBottom /> test case'
describe(describeButtonStickyBottomComponent, () => {
  const { container } = render(
    <ButtonStickyBottom onClick={() => {}}>
      ButtonStickyBottom test
    </ButtonStickyBottom>
  )

  test(`Render ${describeButtonStickyBottomComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})