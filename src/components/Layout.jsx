/* global localStorage*/
import React from 'react';
import PropTypes from 'react-router';

import Navigation from './Header/Navigation';
import Footer from './Footer/Footer';
import Error from './Error';

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

// Set Default Props
Layout.defaultProps = {
  children: ''
};

export default Layout;
