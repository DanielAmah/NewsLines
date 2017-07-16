import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

/**
* @class{Navigation}
* @param  {function} class Navigation extends React.Component { {displays the navigation bar}
* @return {string} {returns a navigation bar with sources and a logout button}
*/
class Navigation extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

/**
* @method {logout} - remove user from local storage
* @param  {string} event {onclick event to logout a user}
* @description {remove user from localstorage}
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
* @param  {object} Navigation.defaultProps = { {set default props}
* @return {object} {set empty values for props}
*/
Navigation.defaultProps = {
  info: {
    imageURL: '',
    name: ''
  }
};

/**
* @param  {object} Navigation.propTypes = { {set prop types}
* @return {object} {a key value pair showing props data type}
*/
Navigation.propTypes = {
  info: PropTypes.object,
  imageURL: PropTypes.string,
  name: PropTypes.string
};

export default Navigation;

