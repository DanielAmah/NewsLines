
import React from 'react';
import PropTypes from 'react-router';

import Navigation from './Header/Navigation';
import Footer from './Footer/Footer';
import Error from './Error';

/**
 * @function {Layout}
 * @param {string} props
 * @returns {components} return  children component in layout
 * @description pass props to layout components
 */
const Layout = (props) => {
  const userInfo = JSON.parse(localStorage.getItem('User'));
  return (
    <div>
      <Navigation info={userInfo} />
      <Error />
      {props.children}
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

/**
* @param  {object} Layout.defaultProps = { {set default props}
* @return {object} {a key value pair with an empty value as default}
*/
Layout.defaultProps = {
  children: ''
};

export default Layout;
