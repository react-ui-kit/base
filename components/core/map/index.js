import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Map extends PureComponent {
  static displayName = 'Map'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);
    this.google = google || undefined;
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.mapContainer, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  render() {
    const {className, ...rest} = this.props;
    return (
      <div ref='mapContainer' className={`map ${className}`} {...rest} />
    );
  }
}

// Inspiration: http://thomastuts.com/blog/react-refs-google-maps.html
