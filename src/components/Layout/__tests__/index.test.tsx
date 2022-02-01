import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Layout } from '../index'

const describeComponent = '<Layout /> test case'

describe(describeComponent, () => {
  const { container } = render(
    <Layout>
      <p>Layout Test</p>
    </Layout>
  )

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})