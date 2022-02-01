import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Loading } from '../index'

const describeComponent = '<Loading /> test case'

describe(describeComponent, () => {
  const { container } = render(<Loading />)

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})