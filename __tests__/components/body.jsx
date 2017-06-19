import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import Body from '../../src/components/Body.jsx';

describe('Body', () => {
  const wrapper = mount(<Body />);
  test('Body', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Body />, div);
    });
  });
  test('should have have a sourcesort', () => {
    expect(wrapper.find('SourceSort')).to.have.length(1);
  });
  test('should have have line breaks', () => {
    expect(wrapper.find('br')).to.have.length(2);
  });
});


