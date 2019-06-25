import React from 'react'
import SignUp from './SignUp'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the Sign Up webpage", () => {
  const app = mount(<Router> <SignUp /> </Router>)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
