/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import NewsSource from '../../src/components/Body/NewsSource';

describe('Sources Component', () => {
  test('should match the sources snapshot', () => {
    const component = mount(<NewsSource />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('should contain the appropraite props', () => {
    const wrapper = mount(<NewsSource />);
    expect(wrapper.node.props.name).toEqual('');
    wrapper.setProps({ name: 'the-next-web' });
    expect(wrapper.node.props.name).toEqual('the-next-web');
  });

  test('props should be in correct positions', () => {
    const wrapper = mount(<NewsSource name="Daniel Amah" description="Software Developer" />);
    const h3 = wrapper.find('h3');
    const p = wrapper.find('p');
    expect(h3.text()).toBe('Daniel Amah');
    expect(p.text()).toBe('Software Developer...');
  });
});
