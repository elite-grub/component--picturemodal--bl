/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { config } from '../tests/enzyme.config';

import App from '../components/App';

describe('Test for App skeleton', () => {
  const wrapper = shallow(<App />);
  it('Should have an div', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should be selectable by class', () => {
    expect(wrapper.is('div.showcase-container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('img').length).toBe(5);
  });
  
});
