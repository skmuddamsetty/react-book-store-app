import { filtersReducer } from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
});

test('should set sortBy to price', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_PRICE' });
  expect(state.sortBy).toBe('price');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'book'
  });
  expect(state.text).toBe('book');
});

test('should set startDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 100
  });
  expect(state.startDate).toBe(100);
});

test('should set endDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 200
  });
  expect(state.endDate).toBe(200);
});
