// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_BOOK
export const addBook = book => ({
  type: 'ADD_BOOK',
  book
});
// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id
});
// EDIT_BOOK

export const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates
});

export const startAddBook = (bookData = {}) => {
  return dispatch => {
    const { description = '', note = '', price = 0, createdAt = 0 } = bookData;
    const book = { description, note, price, createdAt };
    return database
      .ref('books')
      .push(book)
      .then(ref => {
        dispatch(addBook({ id: ref.key, ...book }));
      })
      .catch();
  };
};
