import React from 'react'
import SignIn from './SignIn'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
it("should render the Sign In webpage", () => {
  const app = mount(<SignIn />)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
