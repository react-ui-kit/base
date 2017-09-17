import React from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Footer extends React.Component {
  static displayName = 'Footer'

  static propTypes = {
    className: PropTypes.string,
    center: PropTypes.bool
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, center, className, ...rest} = this.props;
    const isCenter = center ? ' center' : '';
    return (
      <footer className={`footer${isCenter} ${className}`} {...rest}>{children}</footer>
    );
  }
}
