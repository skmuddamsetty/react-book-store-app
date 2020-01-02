import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_BOOK
const addBook = ({
  description = '',
  note = '',
  price = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    description,
    note,
    createdAt
  }
});
// REMOVE_BOOK
const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id
});
// EDIT_BOOK

const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates
});
// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_PRICE

const sortByPrice = () => ({ type: 'SORT_BY_PRICE' });
// SET_START_DATE

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE

const setEndDate = endDate => ({ type: 'SET_END_DATE', endDate });
// Books reducer
const booksReducerDefaultState = [];

const booksReducer = (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      //   return state.concat(action.book);
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    case 'EDIT_BOOK':
      return state.map(book => {
        if (book.id === action.id) {
          return { ...book, ...action.updates };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_PRICE':
      return { ...state, sortBy: 'price' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// get Visible Books
export const getVisibleBooks = (
  books,
  { text, sortBy, startDate, endDate }
) => {
  return books
    .filter(book => {
      const startDateMatch =
        typeof startDate !== 'number' || book.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || books.createdAt <= endDate;
      const textMatch = book.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.price < b.price ? -1 : 1;
      }
    });
};

// Store Creation
const store = createStore(
  combineReducers({ books: booksReducer, filters: filtersReducer })
);

const book1 = store.dispatch(
  addBook({ description: 'My First React Book', price: 100, createdAt: 1000 })
);

const book2 = store.dispatch(
  addBook({
    description: 'My First Angular Book',
    price: 100,
    createdAt: -1000
  })
);

store.dispatch(removeBook({ id: book1.book.id }));

store.dispatch(editBook(book2.book.id, { price: 200 }));

store.dispatch(setTextFilter('angular'));

store.dispatch(sortByPrice());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));

// store.dispatch(setEndDate(225));

// const demoState = {
//   books: [
//     {
//       id: 'dawdawdawd',
//       description: 'Physics',
//       note: 'This is the physics book',
//       price: 5450,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'physics',
//     sortBy: 'price',
//     startDate: undefined,
//     endDate: undefined
//   }
// };

export default store;
