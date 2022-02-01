import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Empty } from '../index'

const describeComponent = '<Empty /> test case'

describe(describeComponent, () => {
  const { container } = render(<Empty text='Empty layout test' />)

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})