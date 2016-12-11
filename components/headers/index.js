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
    const {children, className, ...rest} = this.props;

    return (
      <header className={`header ${className}`} {...rest}>{children}</header>
    );
  }
}
