import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StopsList from './StopsList';
import StopsNew from './StopsNew';
import StopsEdit from './StopsEdit';
import Stop from './Stop';

export default class Stops extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.path} component={StopsList}/>
        <Route path={`${this.props.match.path}/new`} component={StopsNew}/>
        <Route path={`${this.props.match.path}/:id/edit`} component={StopsEdit}/>
        <Route path={`${this.props.match.path}/:id`} component={Stop}/>
      </Switch>
    )
  }
}