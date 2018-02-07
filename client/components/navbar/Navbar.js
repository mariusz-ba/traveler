import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/authActions';

class Navbar extends Component {
  onSignout = (e) => {
    e.preventDefault();
    this.props.signOut();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userMenu = (
      <ul className="navbar__menu">
        <li className="navbar__link"><Link to="/dashboard">Dashboard</Link></li>
        <li className="navbar__link"><a href="#" onClick={this.onSignout}>Sign out</a></li>
      </ul>
    );

    const guestMenu = (
      <ul className="navbar__menu">
        <li className="navbar__link"><Link to="/signin">Sign in</Link></li>
        <li className="navbar__link"><Link to="/signup">Sign up</Link></li>
      </ul>
    );

    return (
      <nav className="navbar">
        <span className="navbar__wprapper">
          <Link className="navbar__brand" to="/">Traveler</Link>
          <span className="navbar__description">Find the Route</span>
        </span>
        { isAuthenticated ? userMenu : guestMenu }
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signOut })(Navbar);