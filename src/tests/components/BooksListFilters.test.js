import React from 'react';
import { shallow } from 'enzyme';
import { BooksListFilters } from '../../components/BooksList/BooksListFilters/BooksListFilters';
import { books } from '../fixtures/books';
import toJSON from 'enzyme-to-json';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByPrice, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByPrice = jest.fn();
  wrapper = shallow(
    <BooksListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByPrice={sortByPrice}
    />
  );
});
test('should render BooksListFilters properly', () => {
  expect(wrapper).toMatchSnapshot();
});
