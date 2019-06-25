import React from 'react'
import  {List} from './List'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the List component correctly", () => {
  const app = mount(<List problems={[]} />)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
