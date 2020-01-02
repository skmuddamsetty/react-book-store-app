import React from 'react';
import { connect } from 'react-redux';
import BooksListItem from './BooksListItem/BooksListItem';
import { getVisibleBooks } from '../../selectors/books';

const BooksList = props => (
  <div>
    {props.books.map((book, idx) => {
      return <BooksListItem {...book} key={idx} />;
    })}
  </div>
);

// const ConnectedBooksList = connect(state => {
//   return {
//     books: state.books
//   };
// })(BooksList);

const mapStateToProps = state => {
  return {
    books: getVisibleBooks(state.books, state.filters)
  };
};
export default connect(mapStateToProps)(BooksList);
