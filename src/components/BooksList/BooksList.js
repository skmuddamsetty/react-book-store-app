import React from 'react';
import { connect } from 'react-redux';
import BooksListItem from './BooksListItem/BooksListItem';
import { getVisibleBooks } from '../../selectors/books';

export const BooksList = props => (
  <div>
    {
      props.books === undefined || props.books.length === 0 ?
        (<p>No Books</p>) : (props.books.map((book, idx) => {
          return <BooksListItem {...book} key={idx} />;
        }))
    }
  </div>
);

const mapStateToProps = state => {
  return {
    books: getVisibleBooks(state.books, state.filters)
  };
};
export default connect(mapStateToProps)(BooksList);
