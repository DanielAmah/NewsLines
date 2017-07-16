import React from 'react';

/**
* @class {Footer}
* @param  {function} export default class Footer extends React.Component { {display the footer}
* @return {string} {a footer navigation showing the author and the news api label}
*/
export default class Footer extends React.Component {
  render() {
    return (
      <div>
<nav className="navbar navbar-inverse navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbottom">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
            <a className="navbar-brand" href="#!">Daniel Amah</a>
            </div>
             <div className="collapse navbar-collapse" id="Navbottom">
            <ul className="nav navbar-nav">
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a>Powered by News API</a></li>
            </ul>
              </div>
          </div>
        </nav>
</div>
    );
  }
}
