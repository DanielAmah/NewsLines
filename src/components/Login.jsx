import React from 'react';
import GoogleLogin from 'react-google-login';
import * as NewsAction from '../Actions/NewsAction';
import Error from './Error';

import img from '../img/share.png';
/**
 * @function Login
 * @return {function} - onsuccess and onfailure
 */
const Login = () => {
  /**
   * @function responseSuccess
   * @param {object} user - Response object
   * @description Saves user token to localStorage
   */

const responseSuccess = (user) =>{
    const userToken = user.tokenId;
    localStorage.setItem(
      'userToken', userToken
    );
  }
  
  const id = process.env.CLIENT_ID;

  /**
   * @function responseFailure
   * @param {Object} response -Response object
   * @description executes the getFailed method with an argument 'failed to log in, please try again'
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
