import React from 'react';
import PropTypes from 'prop-types';

export default class Payment extends React.Component {
  static displayName = 'Payment'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`payment ${className}`} {...rest}>{children}</div>
    );
  }
}
