import React from 'react'
import BusinessesList from '../client/src/components/BusinessesList'
import renderer from 'react-test-renderer'

test('BusinessesList renders', () => {
  const component = renderer.create(
    <BusinessesList params={{page: 1}}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})