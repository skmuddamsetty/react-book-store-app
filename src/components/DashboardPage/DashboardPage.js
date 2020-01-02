import React from 'react';
import BooksList from '../BooksList/BooksList';
import BooksListFilters from '../BooksList/BooksListFilters/BooksListFilters';

const DashboardPage = () => (
  <div>
    <BooksListFilters />
    <BooksList />
  </div>
);
export default DashboardPage;
