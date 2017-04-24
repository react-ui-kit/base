import React, { PureComponent } from 'react';

export default class Stack extends PureComponent {
  static displayName = 'Stack'

  static propTypes = {
    className: React.PropTypes.string
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
