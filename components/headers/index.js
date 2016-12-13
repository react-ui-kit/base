import React from 'react';
import 'sass/headers/header';

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, center, className, ...rest} = this.props;
    const isCenter = center ? ' center' : '';
    return (
      <header className={`header${isCenter} ${className}`} {...rest}>{children}</header>
    );
  }
}
