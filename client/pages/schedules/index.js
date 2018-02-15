import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Schedules  from './Schedules';
import Schedule   from './Schedule';

export default withRouter(class extends Component {
  render() {
    return (
      <div className="schedules">
        <main>
          <nav className="schedules__navbar">
            <button onClick={() => this.props.history.goBack()}><i class="fas fa-arrow-left"></i></button>
          </nav>
          <Switch>
            <Route exact  path={this.props.match.path}          component={Schedules}/>
            <Route        path={`${this.props.match.path}/:id`} component={Schedule}/>
          </Switch>
        </main>
        <aside>
          map
        </aside>
      </div>
    )
  }
})