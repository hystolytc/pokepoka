import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { NotFound } from '../index'

const describeComponent = '<NotFound /> test case'

describe(describeComponent, () => {
  const { container } = render(<NotFound />)

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})