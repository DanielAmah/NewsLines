/* global document localStorage*/
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import NewsList from './components/NewsList.jsx';
import SourceSort from './components/Body/SourceSort';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import './styles/style.scss';

// Gets element with id:app
const app = document.getElementById('main');

// Renders in the react DOM
ReactDom.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={localStorage.User ? SourceSort : Login} />
      <Route
        path="news"
        component={localStorage.User ? NewsList : Login}
      />
    </Route>
  </Router>,
  app
);
