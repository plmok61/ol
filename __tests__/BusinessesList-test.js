import React from 'react'
import BusinessesList from '../client/src/components/BusinessesList.js'
import renderer from 'react-test-renderer'

test('test 1', () => {
  const component = renderer.create(
    <BusinessesList params={{page: 1}}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})