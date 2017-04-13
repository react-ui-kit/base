import React, { PureComponent } from 'react';

export default class Horizontal extends PureComponent {
  static displayName = 'ChartHorizontal'

  static propTypes = {
    className: React.PropTypes.string
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
