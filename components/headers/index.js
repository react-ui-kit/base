import React from 'react';
import 'sass/headers/header';

export default class Header extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    center: React.PropTypes.bool
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
