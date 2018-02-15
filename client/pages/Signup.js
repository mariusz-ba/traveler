import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from '../actions/authActions';
import axios from 'axios';
import { pick } from 'lodash';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    errors: null
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  onChangeConfirm = (e) => {
    this.setState({ confirm: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const user = pick(this.state, ['username', 'email', 'password', 'confirm']);
    axios.post(`/api/users`, user)
      .then(
        response => this.props.signIn({
          identifier: user.username, 
          password: user.password
        })
      )
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    const { username, email, password, confirm, errors } = this.state;
    return (
      <div>
      { errors &&
        Object.keys(errors).map((error, index) => <p key={index}>{errors[error]}</p>)
      }
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={this.onChangeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={this.onChangeConfirm}
          />
          <button type="submit" onClick={this.onSubmit}>Sign up</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { signIn })(Signup));