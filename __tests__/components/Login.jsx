import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from '../../src/components/Login.jsx';

describe('Login', () => {
  const wrapper = shallow(<Login />);
  test('should have have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
  test('should have have a div', () => {
    expect(wrapper.find('div')).to.have.length(3);
  });
  test('should have have a h2', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });
});
