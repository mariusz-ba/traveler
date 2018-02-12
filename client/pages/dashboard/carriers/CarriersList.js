import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCarriers, deleteCarrier } from '../../../actions/carriersActions';
import { Link } from 'react-router-dom';

class CarriersList extends Component {
  render() {
    const { items } = this.props.carriers;

    return (
      <div className="carrierslist">
        <div className="carrierslist__actions">
          <Link to="/dashboard/carriers/new">New</Link>
        </div>
        <div className="carrierslist__content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(items).map(carrier => (
                  <tr>
                    <td>{carrier.name}</td>
                    <td>{carrier.endpoints[0].name}</td>
                    <td>{carrier.endpoints[1].name}</td>
                    <td>
                      <button>Browse</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ carriers }) => ({ carriers });

export default connect(mapStateToProps, { fetchCarriers, deleteCarrier })(CarriersList);