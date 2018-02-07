import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

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
    this.props.signIn({ identifier, password });
  }

  render() {
    const { identifier, password } = this.state;
    const { errors } = this.props.auth;

    return (
      <div className="signin-container">
      { errors && errors.form &&
        <p className="signin-error">{errors.form}</p>
      }
        <form>
          <input 
            type="text" 
            placeholder="Username of E-mail"
            value={identifier}
            onChange={this.onChangeIdentifier}
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <button type="submit" onClick={this.onSubmit}>Sign in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn })(Signin);