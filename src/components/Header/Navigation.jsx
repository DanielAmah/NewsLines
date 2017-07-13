import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
/**
 * @description 
 * @class Navigation
 * @extends {React.Component}
 * @constructor
 * @returns {nav} return navbar
 */ 
class Navigation extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  /**
   * Logs out user from website
   * @method {logout}
   * @param {event} event Takes in onClick event
   * @return {void}
   */
  logout(event) {
    event.preventDefault();
    localStorage.removeItem('User');
    browserHistory.replace('/');
    location.reload();
  }

  render() {
      
    return ( 
      <div>
        <nav className="navbar navbar-inverse navbar-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
            <a className="navbar-brand" href="#!">News Link</a>
            </div>
             <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>{localStorage.User ? <IndexLink to="/">Sources</IndexLink> : null}</li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>{localStorage.User ? <Link to="/logout" onClick={this.logout}>Logout</Link> : null} </li>
            </ul>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

/**
 * Default Props
 */
Navigation.defaultProps = {
  info: {
    imageURL: '',
    name: ''
  }
};
/**
 * Set Props
 */
Navigation.propTypes = {
  info: PropTypes.object,
  imageURL: PropTypes.string,
  name: PropTypes.string
};

export default Navigation;

