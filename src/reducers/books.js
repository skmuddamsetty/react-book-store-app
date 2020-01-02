// Books reducer
const booksReducerDefaultState = [
  {
    description: 'My First Angular Book',
    price: 450,
    id: 1,
    createdAt: 200
  },
  { description: 'My First React Book', price: 250, id: 2, createdAt: 100 }
];

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
