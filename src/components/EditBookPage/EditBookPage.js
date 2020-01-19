import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookForm from '../BookForm/BookForm';
import { editBook, removeBook } from '../../actions/books';

export class EditBookPage extends Component {
  onEditBook = book => {
    this.props.editBook(this.props.book.id, book);
    this.props.history.push('/');
  };

  onRemoveBook = () => {
    this.props.removeBook({ id: this.props.book.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <BookForm book={this.props.book} onSubmit={this.onEditBook} />
        <button onClick={this.onRemoveBook}>Remove</button>
      </div>
    );
  }
}

// const EditBookPage = props => {
//   return (
//     <div>
//       <BookForm
//         book={props.book}
//         onSubmit={book => {
//           props.dispatch(editBook(props.book.id, book));
//           props.history.push('/');
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeBook({ id: props.book.id }));
//           props.history.push('/');
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };
const mapStateToProps = (state, props) => {
  console.log(state.books, props.match.params.id);
  return {
    book: state.books.find(book => book.id === props.match.params.id)
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    editBook: (id, book) => dispatch(editBook(id, book)),
    removeBook: id => dispatch(removeBook(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage);
