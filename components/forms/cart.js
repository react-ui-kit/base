import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  static displayName = 'Cart'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`cart ${className}`} {...rest}>{children}</div>
    );
  }
}
