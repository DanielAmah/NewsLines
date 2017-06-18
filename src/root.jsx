import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/404.jsx';
import Authstore from '../src/store/AuthStore.js';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: null };
    this.onChange = this.onChange.bind(this);
    this.checkUserState = this.checkUserState.bind(this);
    this.noAuth = this.noAuth.bind(this);
  }
  componentDidMount() {
    Authstore.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: Authstore.getUser() });
  }
  checkUserState(nextState, replace, next) {
    if (this.state.info === null) {
      replace('/');
    }
    next();
  }
  noAuth(nextState, replace, next) {
    if (this.state.info === {}) {
      replace('/news');
    }
    next();
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} onEnter={this.noAuth}>
          <Route path="news" component={Body} onEnter={this.checkUserState} />
          <Route path="*" component={NotFound} />
          <IndexRoute component={Login} />
        </Route>
      </Router>
    );
  }
}
