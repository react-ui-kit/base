import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Bar extends PureComponent {
  static displayName = 'Bar'

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`bar ${className}`} {...rest}>{children}</div>
    );
  }
}
