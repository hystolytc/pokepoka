import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Error } from '../index'

const describeComponent = '<Error /> test case'

describe(describeComponent, () => {
  const { container } = render(<Error />)

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})