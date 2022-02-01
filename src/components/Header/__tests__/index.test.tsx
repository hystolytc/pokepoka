import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from '../index'

const describeComponent = '<Header /> test case'

describe(describeComponent, () => {
  const { container } = render(
    <Header>
      <p>Header Test</p>
    </Header>
  )

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})