import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App Container', () => {
  it('should be rendered without crashing', () => {
    shallow(<App />)
  })
})
