
import React from 'react';
import PropTypes from 'react-router';

import Navigation from './Header/Navigation';
import Footer from './Footer/Footer';
import Error from './Error';

/**
 * @description pass props to layout components
 * @function {Layout}
 * @param {any} props
 * @returns {components} return  children component in layout
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
 * default props
 */
Layout.defaultProps = {
  children: ''
};

export default Layout;
