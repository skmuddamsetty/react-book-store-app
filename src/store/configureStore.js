import { createStore, combineReducers } from 'redux';
import { booksReducer } from '../reducers/books';
import { filtersReducer } from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({ books: booksReducer, filters: filtersReducer })
  );
  return store;
};
