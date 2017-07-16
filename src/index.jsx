import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import NewsList from './components/NewsList.jsx';
import SourceSort from './components/Body/SourceSort';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import './styles/style.scss';


const app = document.getElementById('main');

/**
 * @description Google authorisation url to verify user email.
 */
const verificationURL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?' +
  `id_token=${window.localStorage.userToken}`;

/**
 * @function {isUserLoggedIn} function to check verification.
 * @description Verify google user token stored in local storage and authorise user
 * redirect to protected routes after verification
 * @return {Promise} a promise
 * @
 */
const isUserLoggedIn = () => {
  if (localStorage.userToken) {
    return fetch(verificationURL)
      .then(res => res)
      .then((googleResponse) => {
        if (googleResponse.email_verified === 'true') {
          return true;
        }
        return false;
      });
  }
  return false;
};

ReactDom.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={isUserLoggedIn() ? SourceSort : Login} />
      <Route
        path="news"
        component={isUserLoggedIn() ? NewsList : Login}
      />
    </Route>
  </Router>,
  app
);
