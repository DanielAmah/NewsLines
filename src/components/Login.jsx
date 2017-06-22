import React from 'react';
import { Link } from 'react-router';

import GoogleLogin from 'react-google-login';
import AuthAction from '../Actions/AuthAction';
import Authstore from '../store/AuthStore';
import img from '../img/share.png';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: '',
    },
      info: '',
      showButton: false,
    };
    this.googleResponse = this.googleResponse.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    Authstore.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: Authstore.getUser() });
  }
  componentDidUnMount() {
    Authstore.removeChangeListener(this.onChange);
  }
  googleResponse(response) {
    AuthAction.getUser(response.profileObj);
    const user = response.profileObj;
    if (response) {
      this.setState({
        showButton: true,
        info: user,
        credentials: {
          email: user.email,
          name: user.name,
        },
      });
    } else {
      <Link to={'/'}> / </Link>
    }
  }
  render() {
    return (
      <div>
        <form>
          <div className="text-center">
            <div className="text-center">
              <img src={img} alt="logo" id="logo" />
              <h2 className="text-center">NEWS LINK</h2>
            </div>
            { this.state.showButton ? false : <p>Get access to latest News, Sign in.</p> }
            { this.state.showButton ? false :
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              buttonText="Sign In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
            ><i className="fa fa-google-plus" />
              <span> Login</span>
            </GoogleLogin> }
            {this.state.showButton ? <p className="text-center">Welcome back!, {this.state.info.name} <br />
            </p>
            : null}
            { this.state.showButton ? <div className="col-md-12">
              <Link to={'news'}><button
                className="btn btn-danger"
              >
                <b>READ NEWS</b>
              </button>
              </Link>
            </div> : null
             }
          </div>
        </form>
      </div>
    );
  }
}
