import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByPrice
} from '../../../actions/filters';

export class BooksListFilters extends Component {
  onTextChange = event => {
    this.props.setTextFilter(event.target.value);
  };

  onSelectChange = event => {
    if (event.target.value === 'price') {
      this.props.sortByDate();
    } else if (event.target.value === 'date') {
      this.props.sortByPrice();
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          valueArray={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value='date'>Date</option>
          <option value='price'>Price</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPrice: () => dispatch(sortByPrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksListFilters);
