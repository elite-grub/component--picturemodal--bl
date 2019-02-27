/* eslint-disable */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { config } from '../tests/enzyme.config';


import Controller from '../components/Controller';
import Pictures from '../components/Pictures';

describe('Testing skelton for the controller component', () => {
  const wrapper = shallow(<Controller />);
  it('Should have buttons', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('Should have one in the controller component', () => {
    expect(wrapper.find(Pictures).length).toBe(1);
  });

});



