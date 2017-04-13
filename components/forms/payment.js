import React from 'react';

export default class Payment extends React.Component {
  static propTypes = {
    className: React.PropTypes.string
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={`payment ${className}`} {...rest}>{children}</div>
    );
  }
}
