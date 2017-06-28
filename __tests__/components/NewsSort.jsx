/* global expect test */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewsSort from '../../src/components/Body/NewsSort';

describe('NewsSort Component', () => {
  test('should match the NewsSort snapshot', () => {
    const component = shallow(<NewsSort />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
