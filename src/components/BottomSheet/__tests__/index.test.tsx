import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BottomSheet } from '../index'

const describeComponent = '<BottomSheet /> test case'

describe(describeComponent, () => {
  const { container } = render(
    <BottomSheet isOpen={true}>
      <p>BottomSheet Test</p>
    </BottomSheet> 
  )

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})