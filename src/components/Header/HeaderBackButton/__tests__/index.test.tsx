import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { HeaderBackButton } from '../index'

const describeComponent = '<HeaderBackButton /> test case'

describe(describeComponent, () => {
  const { container } = render(
    <HeaderBackButton
      title='Title test'
      goBack={() => {}}
      goMyPokemon={() => {}} />
  )

  test(`Render ${describeComponent} correctly`, () => {
    expect(container).toMatchSnapshot()
  })
})