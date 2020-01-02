import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoardPage from '../components/DashboardPage/DashboardPage';
import BookDetailsPage from '../components/BookDetailsPage/BookDetailsPage';
import AddBookPage from '../components/AddBookPage/AddBookPage';
import EditBookPage from '../components/EditBookPage/EditBookPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import Header from '../components/Header/Header';

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={DashBoardPage} exact={true} />
        <Route path='/add-book' component={AddBookPage} exact={true} />
        <Route path='/book-detail' component={BookDetailsPage} exact={true} />
        <Route path='/edit-book/:id' component={EditBookPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
