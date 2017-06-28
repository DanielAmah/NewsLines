/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import NewsList from '../../src/components/NewsList';

describe('HeadLine Component', () => {
  test('Should match the HeadLine Snapshot', () => {
    const component = toJson(mount(<NewsList sorts="top" />));
    expect(component).toMatchSnapshot();
  });

  test('should have an onChange function', () => {
    const onChange = jest.fn();
    const component = mount(<NewsList onChange={onChange} />);
    expect(component.props().onChange).toBe(onChange);
  });
  test('onChange function to be called on change of input field', () => {
    const onChange = jest.fn();
    const component = mount(<NewsList onChange={onChange} />);
    const input = component.find('select');
    expect(input).toBeDefined();
    expect(component.state().currentSort).toBe('');
    input.simulate('change', { target: { value: 'top' } });
    expect(component.state().currentSort).toBe('top');
  });
});
