import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByPrice
} from '../../../actions/filters';

const BooksListFilters = props => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={event => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      valueArray={props.filters.sortBy}
      onChange={event => {
        if (event.target.value === 'price') {
          props.dispatch(sortByDate());
        } else if (event.target.value === 'date') {
          props.dispatch(sortByPrice());
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='price'>Price</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(BooksListFilters);
