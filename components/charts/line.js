import React from 'react';

export default class Line extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
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
