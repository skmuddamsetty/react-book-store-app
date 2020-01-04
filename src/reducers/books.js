// Books reducer
const booksReducerDefaultState = [];

export const booksReducer = (state = booksReducerDefaultState, action) => {
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
