import React, { PureComponent } from 'react';

export default class Line extends PureComponent {
  static displayName = 'ChartLine'

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
