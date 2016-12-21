import React from 'react'
import SearchPagesForm from '../client/src/components/SearchPagesForm'
import renderer from 'react-test-renderer'

test('SearchPagesForm renders', () => {
  const component = renderer.create(
    <SearchPagesForm />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})