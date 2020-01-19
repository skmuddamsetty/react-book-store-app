import React from 'react';
import { shallow } from 'enzyme';
import { BooksList } from '../../components/BooksList/BooksList';
import { books } from '../fixtures/books';
import toJSON from 'enzyme-to-json';

test('should render books list with books', () => {
    const wrapper = shallow(<BooksList books={books} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render books list with empty message', () => {
    const wrapper = shallow(<BooksList books={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})