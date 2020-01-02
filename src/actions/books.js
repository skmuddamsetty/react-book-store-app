import uuid from 'uuid';

// ADD_BOOK
export const addBook = ({
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
