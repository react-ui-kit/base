import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Dashboard extends PureComponent {
  static displayName = 'Dashboard'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, ...rest} = this.props;

    return (
      <section className={utils.strim(`dashboard ${className}`)} {...rest}>{children}</section>
    );
  }
}
