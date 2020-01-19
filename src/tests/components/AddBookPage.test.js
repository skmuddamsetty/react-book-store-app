import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddBookPage } from '../../components/AddBookPage/AddBookPage';
import { books } from '../fixtures/books';

let startAddBook, history, wrapper;

beforeEach(() => {
  startAddBook = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddBookPage startAddBook={startAddBook} history={history} />
  );
});

test('should render AddBookPage properly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddBook).toHaveBeenLastCalledWith(books[1]);
});
