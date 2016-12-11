import React, { PureComponent } from 'react';
import 'sass/core/table';

export default class Table extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <table className={`table ${className}`} {...rest}>
        {children}
      </table>
    );
  }
}
