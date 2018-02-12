import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CarriersList from './CarriersList';
import Carrier from './Carrier';
import CarrierNew from './CarrierNew';

export default class Carriers extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <Switch>
        <Route exact path={path} component={CarriersList}/>
        <Route path={`${path}/new`} component={CarrierNew}/>
        <Route path={`${path}/:id`} component={Carrier}/>
      </Switch>
    )
  }
}