import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCarrier } from '../../actions/carriersActions';
import { fetchStops } from '../../actions/stopsActions';

class Schedules extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCarrier(id)
      .then(() => this.props.fetchStops({ carrier: id }));
  }

  render() {
    const { id } = this.props.match.params;
    const carriers = this.props.carriers.items;
    const carrier = carriers[id];

    if(this.props.carriers.isFetching)
      return <p>Loading</p>

    if(!carrier)
      return <p>Not found</p>

    return (
      <div>
        { carrier.name }
      </div>
    )
  }
}

const mapStateToProps = ({ carriers, stops }) => (
  { carriers, stops }
);

export default withRouter(connect(
  mapStateToProps,
  { fetchCarrier, fetchStops }
)(Schedules));