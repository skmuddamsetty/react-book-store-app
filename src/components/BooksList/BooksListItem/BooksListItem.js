import React from 'react';
import { removeBook } from '../../../actions/books';
import { connect } from 'react-redux';

const BooksListItem = ({ description, price, createdAt, id, dispatch }) => (
  <div>
    {description} - Price : {price} with id : {id} - created at : {createdAt}
    <button
      onClick={() => {
        dispatch(removeBook({ id }));
      }}
    >
      Remove
    </button>
  </div>
);
export default connect()(BooksListItem);
