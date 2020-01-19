import React from 'react';
import BookForm from '../BookForm/BookForm';
import { connect } from 'react-redux';
import { startAddBook } from '../../actions/books';

const AddBookPage = props => (
  <div>
    <h1>Add Book</h1>
    <BookForm
      onSubmit={book => {
        props.dispatch(startAddBook(book));
        props.history.push('/');
      }}
    />
  </div>
);
export default connect()(AddBookPage);
