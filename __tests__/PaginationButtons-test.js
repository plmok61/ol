import React from 'react'
import PaginationButtons from '../client/src/components/PaginationButtons'
import renderer from 'react-test-renderer'

test('PaginationButtons renders', () => {
  const component = renderer.create(
    <PaginationButtons />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})