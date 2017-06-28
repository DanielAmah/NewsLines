/* global location localStorage window*/
import React from 'react';
import GoogleLogin from 'react-google-login';
import * as NewsAction from '../Actions/NewsAction';
import Error from './Error';

import img from '../img/share.png';

const Login = () => {
  /**
   * @function responseSuccess
   * @param {any} googleUser - Response object
   * Saves user profile to localStorage
   * reloads the page
   */

  const responseSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    localStorage.setItem(
      'User',
      JSON.stringify({
        iD: profile.getId(),
        name: profile.getName(),
        imageURL: profile.getImageUrl(),
        email: profile.getEmail()
      })
    );
    location.reload();
  };
  // Assigns the client Id to the id variable
  const id = process.env.CLIENT_ID;
  /**
   * @function responseFailure
   * @param {Object} response -Response object
   * console logs the error
   */

  const responseFailure = (response) => {
    NewsAction.getFailed('Failed to Log In, Please try again');
  };
  return (
    <div>
      <div className="text-center">
       <div className="text-center">
              <img src={img} alt="logo" id="logo" />
              <h2 className="text-center">NEWS LINK</h2>
            </div>
            <p>Get access to latest News, Sign in.</p>
            <GoogleLogin
              clientId={id}
              tag="span"
              onSuccess={responseSuccess}
              onFailure={responseFailure}
            >
              <span
               className="googlelogin"
                name="action"
              >
                <i className="fa fa-google-plus" /> 
                &nbsp; &nbsp;Login
              </span>
            </GoogleLogin>
               </div>
    </div>
  );
};

export default Login;
