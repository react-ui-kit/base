import React, { PureComponent } from 'react';
import './style';

export default class Line extends PureComponent {
  static displayName = 'Line'

  static propTypes = {
    className: React.PropTypes.string
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
