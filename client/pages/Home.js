import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Map from '../components/map/Map';
import Navbar from '../components/navbar/Navbar';

import Carrier from './carriers/Carrier';
import CarriersList from './carriers/CarriersList';
import LocalCarriers from './carriers/LocalCarriers';

export default class Home extends Component {
  render() {
    return (
      <div className="home-layout">
        <Navbar/>
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
    )
  }
}