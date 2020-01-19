import React from 'react';
import { shallow } from 'enzyme';
import { BooksListItem } from '../../components/BooksList/BooksListItem/BooksListItem';
import { books } from '../fixtures/books';
import toJSON from 'enzyme-to-json';

test('should render book item', () => {
    const wrapper = shallow(<BooksListItem {...books[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})