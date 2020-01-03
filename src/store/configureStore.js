import { createStore, combineReducers } from 'redux';
import { booksReducer } from '../reducers/books';
import { filtersReducer } from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({ books: booksReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
