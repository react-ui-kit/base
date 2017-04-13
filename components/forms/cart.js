import React from 'react';

export default class Cart extends React.Component {
  static displayName = 'Cart'

  static propTypes = {
    className: React.PropTypes.string
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`cart ${className}`} {...rest}>{children}</div>
    );
  }
}
