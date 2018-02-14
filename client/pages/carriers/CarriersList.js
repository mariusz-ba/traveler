import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCarriers } from '../../actions/carriersActions';

class CarriersList extends Component {

  componentDidMount() {
    this.props.fetchCarriers();
  }

  render() {
    const { items } = this.props.carriers;

    return (
      <div className="carriers-list">
        <h1>List All Carriers</h1>
        <ul>
        {
          Object.values(items).map(carrier => (
            <li>
              <Link to={`/carriers/${carrier._id}`}>
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

const mapStateToProps = ({ carriers }) => ({ carriers });

export default connect(mapStateToProps, { fetchCarriers })(CarriersList);