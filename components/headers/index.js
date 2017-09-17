import React from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Header extends React.Component {
  static displayName = 'Header'

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
      <header className={`header${isCenter} ${className}`} {...rest}>{children}</header>
    );
  }
}
