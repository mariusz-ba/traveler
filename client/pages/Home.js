import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  onSearch = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="home">
        <div className="home__wrapper">
          <nav className="home__navigation">
            <Link to="/schedules"><i class="fas fa-bus"></i><span>Schedules</span></Link>
            <Link to="/settigns"><i class="fas fa-cogs"></i><span>Settings</span></Link>
          </nav>
          <form>
            <input type="text" placeholder="From"/>
            <input type="text" placeholder="To"/>
            <button type="submit" onClick={this.onSearch}>
              <i class="fas fa-search"></i> Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}