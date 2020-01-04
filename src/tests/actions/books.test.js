import { removeBook, editBook, addBook } from '../../actions/books';

test('should setup remove book action object', () => {
  const action = removeBook({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_BOOK', id: '123abc' });
});

test('should setup edit book action object', () => {
  const action = editBook('123abc', { price: 4500 });
  expect(action).toEqual({
    type: 'EDIT_BOOK',
    id: '123abc',
    updates: { price: 4500 }
  });
});

test('should setup add book action object', () => {
  const bookData = {
    description: 'First React Book',
    price: 3200,
    createdAt: 1000,
    note: 'This is my first react book'
  };
  const action = addBook(bookData);
  expect(action).toEqual({
    type: 'ADD_BOOK',
    book: { ...bookData, id: expect.any(String) }
  });
});

test('should setup add book action object with default values', () => {
  const action = addBook({});
  expect(action).toEqual({
    type: 'ADD_BOOK',
    book: {
      id: expect.any(String),
      ...action.book
    }
  });
});
