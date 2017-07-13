/* global expect jest test*/
import React from 'react';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';
import toJson from 'enzyme-to-json';

import Navigation from '../../src/components/Header/Navigation';
xdescribe('Nav Component', () => {
  test('should match the Nav snapshot', () => {
    const component = mount(<Navigation />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
