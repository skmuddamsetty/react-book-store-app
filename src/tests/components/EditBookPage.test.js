import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditBookPage } from '../../components/EditBookPage/EditBookPage';
import { books } from '../fixtures/books';

let editBook, removeBook, history, wrapper;

beforeEach(() => {
  editBook = jest.fn();
  removeBook = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditBookPage
      editBook={editBook}
      removeBook={removeBook}
      history={history}
      book={books[1]}
    />
  );
});

test('should render EditBookPage properly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle editBook', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editBook).toHaveBeenLastCalledWith(books[1].id, books[1]);
});

test('should handle removeBook', () => {
  wrapper.find('button').prop('onClick')(books[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeBook).toHaveBeenLastCalledWith({ id: books[1].id });
});

test('should handle removeBook using simulate click', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeBook).toHaveBeenLastCalledWith({ id: books[1].id });
});
