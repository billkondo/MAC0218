
import React from 'react'
import  {Problem} from './Problem'
import { mount, configure } from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';

configure({adapter: new Adapter()});
it("should render the Problem component correctly", () => {
  const app = mount(<Problem  problem={{title: 'titulo'}}/>)
  expect(toJson(app)).toMatchSnapshot()
  app.unmount
})
