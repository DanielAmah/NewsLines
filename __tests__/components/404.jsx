import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import NotFound from '../../src/components/404.jsx';

describe('404', () => {
  const wrapper = mount(<NotFound />);
  it('should have have a h1', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
describe('404', () => {
  const wrapper = mount(<NotFound />);
  it('should have have a p', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });
});


describe('404', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
  });
});
