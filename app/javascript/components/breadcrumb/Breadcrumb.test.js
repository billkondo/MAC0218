import React from 'react'
import { Breadcrumb } from './Breadcrumb'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the Breadcrumbs correctly", () => {
  const app = mount(<Router> <Breadcrumb /> </Router>)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
