import {
  setTextFilter,
  sortByDate,
  sortByPrice,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should setup setTextFilter action object', () => {
  const action = setTextFilter('book');
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: 'book' });
});

test('should setup setTextFilter action with default object', () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

test('should setup setStartDate action object', () => {
  const action = setStartDate(100);
  expect(action).toEqual({ type: 'SET_START_DATE', startDate: 100 });
});

test('should setup setEndDate action object', () => {
  const action = setEndDate(100);
  expect(action).toEqual({ type: 'SET_END_DATE', endDate: 100 });
});

test('should setup sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup sortByPrice action object', () => {
  const action = sortByPrice();
  expect(action).toEqual({ type: 'SORT_BY_PRICE' });
});
