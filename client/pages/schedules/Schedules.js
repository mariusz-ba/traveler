import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCarriers } from '../../actions/carriersActions';

class Schedules extends Component {
  componentDidMount() {
    this.props.fetchCarriers();
  }

  render() {
    const { items } = this.props.carriers;

    return (
      <div>
        <h1>Schedules</h1>
        <ul>
          {
            Object.values(items).map(carrier => (
              <li key={carrier._id}>
                <Link to={`/schedules/${carrier._id}`}>
                  <div>{carrier.name}</div>
                  <div>{carrier.endpoints[0].name}</div>
                  <div>{carrier.endpoints[1].name}</div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ carriers }) => (
  { carriers }
)

export default connect(mapStateToProps, { fetchCarriers })(Schedules);