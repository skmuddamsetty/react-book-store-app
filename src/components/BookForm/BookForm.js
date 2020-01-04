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
      <div className='container'>
        {this.state.error.trim().length > 0 ? <p>{this.state.error}</p> : ''}
        <form onSubmit={this.submitHandler}>
          <div className='form-group'>
            <label for='description'>Description</label>
            <input
              type='text'
              placeholder='Description'
              autoFocus
              value={this.state.description}
              onChange={this.descriptionChangeHandler}
              className='form-control'
              required
              id='description'
            />
          </div>
          <div className='form-group'>
            <label for='price'>Price</label>
            <input
              type='text'
              placeholder='Price'
              value={this.state.price}
              onChange={this.priceChangeHandler}
              className='form-control'
              id='price'
            />
          </div>
          <div className='form-group'>
            <label for='note'>Note</label>
            <textarea
              placeholder='Add note for your book (optional)'
              onChange={this.noteChangeHandler}
              value={this.state.note}
              className='form-control'
              id='note'
            ></textarea>
          </div>
          <button type='submit' className='btn btn-success'>
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
