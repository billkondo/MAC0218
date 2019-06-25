
import React from 'react'
import  {Menu} from './Menu'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the Menu component correctly", () => {
  const app = mount(<Menu />)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
