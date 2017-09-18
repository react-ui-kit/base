import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Panels extends PureComponent {
  static displayName = 'Panels'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, column, ...rest} = this.props;

    return (
      <section className={utils.strim(`panels ${className} ${column ? 'column' : ''}`)} {...rest}>{children}</section>
    );
  }
}
