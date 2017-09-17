import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Horizontal extends PureComponent {
  static displayName = 'Horizontal'

  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`horizontal ${className}`} {...rest}>{children}</div>
    );
  }
}
