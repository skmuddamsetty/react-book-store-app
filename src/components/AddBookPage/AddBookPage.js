import React, { Component } from 'react';
import BookForm from '../BookForm/BookForm';
import { connect } from 'react-redux';
import { startAddBook } from '../../actions/books';

export class AddBookPage extends Component {
  onSubmit = book => {
    // props.dispatch(startAddBook(book));
    this.props.startAddBook(book);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Book</h1>
        <BookForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
// const AddBookPage = props => (
//   <div>
//     <h1>Add Book</h1>
//     <BookForm
//       onSubmit={book => {
//         // props.dispatch(startAddBook(book));
//         props.onSubmit(book);
//         props.history.push('/');
//       }}
//     />
//   </div>
// );
const mapDispatchToProps = dispatch => {
  return {
    startAddBook: book => dispatch(startAddBook(book))
  };
};
export default connect(undefined, mapDispatchToProps)(AddBookPage);
