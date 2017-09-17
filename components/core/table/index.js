import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Table extends PureComponent {
  static displayName = 'Table'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <table className={utils.strim(`table ${className}`)} {...rest}>
        {children}
      </table>
    );
  }
}
