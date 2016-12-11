import React from 'react';

export default class Bar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
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
