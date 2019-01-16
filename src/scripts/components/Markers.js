import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';
import { DivIcon } from 'leaflet';

export default class Markers extends Component {
  getIcon({ name, emoji }) {
    return new DivIcon({
      className: 'markerIcon',
      html: `
        <img src='../images/pin.svg'>
        <span class='emoji'>${emoji}</span>
        <span class='name'>${name}</span>
      `,
    });
  }

  render() {
    const { points, onClick } = this.props;

    return (
      <div>
        {points.map(point => (
          <Marker
            key={`${point.lat}_${point.lon}`}
            position={[point.lat, point.lon]}
            icon={this.getIcon(point)}
            onClick={() => onClick(point)}
          />
        ))}
      </div>
    );
  }
}

Markers.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClick: PropTypes.func.isRequired,
};