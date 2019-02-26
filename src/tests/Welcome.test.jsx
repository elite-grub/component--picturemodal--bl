/* eslint-disable */
/* eslint-disable import/named */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import { config } from '../tests/enzyme.config';


// Components
import WelcomeMessage from '../components/Welcome';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<WelcomeMessage />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});

