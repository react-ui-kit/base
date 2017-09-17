import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Line extends PureComponent {
  static displayName = 'Line'

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`line ${className}`} {...rest}>{children}</div>
    );
  }
}
