import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Error from '../../src/components/Error.jsx';

test('Error', () => {
  const wrapper = mount(<Error />);
  it('should have a footer', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
test

