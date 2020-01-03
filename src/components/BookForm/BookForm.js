import React, { Component } from 'react';
class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.book ? props.book.description : '',
      note: props.book ? props.book.note : '',
      price: props.book ? (props.book.price / 100).toString() : '',
      error: ''
    };
  }

  descriptionChangeHandler = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  noteChangeHandler = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  priceChangeHandler = e => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.price) {
      this.setState(() => ({ error: 'Please provider Description and Price' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        price: parseFloat(this.state.price) * 100,
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error.trim().length > 0 ? <p>{this.state.error}</p> : ''}
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.descriptionChangeHandler}
          />
          <input
            type='text'
            placeholder='Price'
            value={this.state.price}
            onChange={this.priceChangeHandler}
          />
          <textarea
            placeholder='Add note for your book (optional)'
            onChange={this.noteChangeHandler}
            value={this.state.note}
          ></textarea>
          <button type='submit'>Add Book</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
