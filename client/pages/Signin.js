import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';

class Signin extends Component {
  state = {
    identifier: '',
    password: ''
  }

  onChangeIdentifier = (e) => {
    this.setState({ identifier: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { identifier, password } = this.state;
    this.props.signIn({ identifier, password })
      .then(() => {
        if(isEmpty(this.props.auth.errors))
          this.props.history.push('/');
      });
  }

  render() {
    const { identifier, password } = this.state;
    const { errors } = this.props.auth;

    const errorClass = errors && errors.form ? 'error' : '';

    return (
      <div>
        <div>
          <form>
            <input
              className={errorClass}
              type="text" 
              placeholder="Username of E-mail"
              value={identifier}
              onChange={this.onChangeIdentifier}
            />
            <input
              className={errorClass}
              type="password" 
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button
              type="submit" 
              onClick={this.onSubmit}>Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default withRouter(connect(mapStateToProps, { signIn })(Signin));