import React from 'react';

/**
 * @export
 * @class Footer
 * @extends {React.Component}
 */

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#" >Designed By Daniel Amah</a>
    </div>
    <ul className="nav navbar-nav">
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a> powered by News API </a></li>
    </ul>
  </div>
</nav>
</div>
    );
  }
}
