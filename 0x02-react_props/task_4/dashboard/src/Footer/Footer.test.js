import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('Footer', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists());
  });

  test('Components at the very least render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find('p');
    const copywrite = /Copyright/;

    expect(copywrite.test(wrapper.text()));
  });
});