import React from 'react';
import { Link } from 'react-router-dom';

const BooksListItem = ({ description, price, createdAt, id, dispatch }) => (
  <div>
    <Link to={`/edit-book/${id}`}>
      <h3>{description}</h3>
    </Link>
    Price : {price} with id : {id} - created at : {createdAt}
  </div>
);
export default BooksListItem;
