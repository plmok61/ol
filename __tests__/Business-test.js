import React from 'react'
import Business from '../client/src/components/Business'
import renderer from 'react-test-renderer'

test('Business renders', () => {
  const component = renderer.create(
    <Business params={{id:1}}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})