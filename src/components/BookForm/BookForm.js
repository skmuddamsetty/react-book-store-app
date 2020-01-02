import React, { Component } from 'react';
class BookForm extends Component {
  state = { description: '', note: '', price: '' };

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
    if (price.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };

  render() {
    return (
      <div>
        <form>
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
