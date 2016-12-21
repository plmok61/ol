import React from 'react'
import BusinessListItem from '../client/src/components/BusinessListItem'
import renderer from 'react-test-renderer'

test('BusinessListItem renders', () => {
  const component = renderer.create(
    <BusinessListItem business={{name: 'Test Company'}}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})