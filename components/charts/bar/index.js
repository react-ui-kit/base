import React, { PureComponent } from 'react';
import './style';

export default class Bar extends PureComponent {
  static displayName = 'Bar'

  static propTypes = {
    className: React.PropTypes.string
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
