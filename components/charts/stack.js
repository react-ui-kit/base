import React from 'react';

export default class Stack extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
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
