import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Overview from './Overview';
import Carriers from './carriers/Carriers';
import Stops from './stops/Stops';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ul className="dashboard__menu">
          <li className="dashboard__item"><Link to="/dashboard/" className="dashboard__link">Overview</Link></li>
          <li className="dashboard__item"><Link to="/dashboard/carriers" className="dashboard__link">Carriers</Link></li>
          <li className="dashboard__item"><Link to="/dashboard/stops" className="dashboard__link">Stops</Link></li>
        </ul>
        <div className="dashboard__panel">
          <div className="dashboard__header">
            <h2 className="dashboard__heading">
              {
                this.props.history.location.pathname
                .split('/').filter(x => x.length).slice(-1)[0]
              }
            </h2>
            <p className="dashboard__location">
              {
                this.props.history.location.pathname
                .split('/').filter(x => x.length).join(' - ')
              }
            </p>
          </div>
          <div className="dashboard__content">
            <Switch>
              <Route exact path={this.props.match.path} component={Overview}/>
              <Route path={`${this.props.match.path}/carriers`} component={Carriers}/>
              <Route path={`${this.props.match.path}/stops`} component={Stops}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard);