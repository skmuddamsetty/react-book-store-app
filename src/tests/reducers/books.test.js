import { booksReducer } from '../../reducers/books';
import { books } from '../fixtures/books';

test('should set default state', () => {
  const state = booksReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove book by id', () => {
  const action = { type: 'REMOVE_BOOK', id: books[1].id };
  const state = booksReducer(books, action);
  expect(state).toEqual([books[0], books[2]]);
});

test('should not remove book if id not found', () => {
  const action = { type: 'REMOVE_BOOK', id: -1 };
  const state = booksReducer(books, action);
  expect(state).toEqual(books);
});

test('should add a book', () => {
  const book = {
    id: '4',
    description: 'Angular Testing Book',
    price: 250,
    createdAt: 0
  };
  const action = { type: 'ADD_BOOK', book };
  const state = booksReducer(books, action);
  expect(state).toEqual([...books, book]);
});

test('should edit a book', () => {
  const price = 500;
  const action = { type: 'EDIT_BOOK', updates: { price }, id: books[1].id };
  const state = booksReducer(books, action);
  expect(state[1].price).toEqual(price);
});

test('should not edit a book if book not found', () => {
  const price = 500;
  const action = { type: 'EDIT_BOOK', updates: { price }, id: -1 };
  const state = booksReducer(books, action);
  expect(state).toEqual(books);
});
