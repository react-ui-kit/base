import React, { PureComponent } from 'react';
import 'sass/core/table';

export default class Table extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
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
