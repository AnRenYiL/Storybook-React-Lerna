import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button Component', function () {
    it('renders without props', function () {
        const wrapper = mount(<Button />);
        const button = wrapper.find('.button');
        expect(button.length).toBe(1);
    })
})