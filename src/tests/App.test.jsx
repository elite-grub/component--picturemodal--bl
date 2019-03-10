/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

module.exports = {
  config: configure({ adapter: new Adapter() }),
};

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

