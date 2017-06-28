/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SourceSort from '../../src/components/Body/SourceSort';

describe('SourceList Component', () => {
  test('should match the SourceList component snapshot', () => {
    const component = mount(<SourceSort />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('should have state in correct position', () => {
    const component = mount(<SourceSort />);
    expect(component.find('#sources').length).toBe(1);
    expect(component.find('#bar').length).toBe(0);
    component.setState({ name: 'bar' });
    expect(component.find('#sources').length).toBe(0);
    expect(component.find('#bar').length).toBe(1);
  });

  test('should have a filterSources function', () => {
    const filterSources = jest.fn();
    const component = mount(<SourceSort onChange={filterSources} />);
    expect(component.props().onChange).toBe(filterSources);
  });
  test('filterSources function to be called onChange of input field', () => {
    const filterSources = jest.fn();
    const component = mount(<SourceSort onChange={filterSources} />);
    const input = component.find('input');
    expect(input).toBeDefined();
    expect(component.state().searchTerm).toBe('');
    input.simulate('change', { target: { value: 'the next' } });
    expect(component.state().searchTerm).toBe('the next');
  });
});
