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
      <div className="schedules__container">
        <h1>SCHEDULES</h1>
        <ul className="schedules__list">
          {
            Object.values(items).map(carrier => (
              <li key={carrier._id} className="schedules__item">
                <Link to={`/schedules/${carrier._id}`}>
                  <div className="schedules__item--image"><i className="fas fa-bus"></i></div>
                  <div className="schedules__item--name">{carrier.name}</div>
                  <div className="schedules__item--stop"><i className="fas fa-map-marker-alt"></i> Kraków Jubilat</div>
                  <div className="schedules__item--endpoints">
                    <div>{carrier.endpoints[0].name.substr(0, 3).toUpperCase()}</div>
                    <i className="fas fa-arrows-alt-v"></i>
                    <div>{carrier.endpoints[1].name.substr(0, 3).toUpperCase()}</div>
                  </div>
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