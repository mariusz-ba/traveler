import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Map from '../components/map/Map';

import Carrier from './carriers/Carrier';
import CarriersList from './carriers/CarriersList';
import LocalCarriers from './carriers/LocalCarriers';

import Toolbar from '../components/toolbar/Toolbar';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Toolbar/>
        <div className="home-layout">
          <div className="home-left">
            <Switch>
              <Route exact path="/" component={LocalCarriers}/>
              <Route exact path="/carriers" component={CarriersList}/>
              <Route path="/carriers/:id" component={Carrier}/>
            </Switch>
          </div>
          <div className="home-right">
            <Map/>
          </div>
        </div>
      </div>
    )
  }
}