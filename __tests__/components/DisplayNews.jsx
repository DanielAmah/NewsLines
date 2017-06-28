/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import DisplayNews from '../../src/components/Body/DisplayNews';

describe('Article Component', () => {
  test('should match the article snapshot', () => {
    const component = mount (<DisplayNews />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('should contain the appropriate props', () => {
    const component = mount(<DisplayNews />);
    expect(component.node.props.title).toEqual('');
    component.setProps({ title: 'the-next-web' });
    expect(component.node.props.title).toEqual('the-next-web');
  });

  test('props should be in the correct position', () => {
    const component = mount(<DisplayNews title="Daniel Amah" description="Software Developer" />);
    const span = component.find('span');
    const p = component.find('p');
    expect(span.text()).toBe('Daniel Amah...');
    expect(p.text()).toBe('Software Developer...');
  });
});
