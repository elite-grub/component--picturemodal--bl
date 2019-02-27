/* eslint-disable */
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import { config } from '../tests/enzyme.config';

import Pic from '../components/Pic';

describe('Basic skeleton test for Pic component', () => {
  const wrapper = shallow(<Pic />)
  it('should have an image', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should find only one image', () => {
    expect(mount(<Pic />).find('img').length).toBe(1);
  });
});