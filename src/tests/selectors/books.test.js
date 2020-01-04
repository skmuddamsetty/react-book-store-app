import { getVisibleBooks } from '../../selectors/books';
import { books } from '../fixtures/books';

test('should filter by text value', () => {
  const filters = {
    text: 'book',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[2], books[1], books[0]]);
});

test('should sort by price', () => {
  const filters = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[1], books[2], books[0]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleBooks(books, filters);
  expect(result).toEqual([books[2], books[1], books[0]]);
});
