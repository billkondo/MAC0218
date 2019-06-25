
import React from 'react'
import { Create } from './Create'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the Create component correctly", () => {
  const app = mount(<Router> <Create /></Router>)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
