import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Stack extends PureComponent {
  static displayName = 'Stack'

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`stack ${className}`} {...rest}>{children}</div>
    );
  }
}
