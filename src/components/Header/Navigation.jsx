import React from 'react';
import Authstore from '../../store/AuthStore';
import LogoutAction from '../../Actions/LogoutAction';
/**
 * @export
 * @class Navigation
 * @extends {React.Component}
 * The Logout Action changes the state of the user
 */

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }
  componentDidMount() {
    Authstore.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ user: true, info: Authstore.getUser() });
  }
  componentDidUnMount() {
    Authstore.removeChangeListener(this.onChange);
  }
  logUserOut() {
    LogoutAction.logout(this.state.user);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/" >NEWS LINK</a>
            </div>
            <ul className="nav navbar-nav" />
            <ul className="nav navbar-nav navbar-right">
              {this.state.user ?
                <li onClick={this.logUserOut}><a><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
        : null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
