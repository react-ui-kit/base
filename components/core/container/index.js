import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Container extends PureComponent {
  static displayName = 'Container'

  static propTypes = {
    className: PropTypes.string,
    fluid: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    fluid: false
  }

  render() {
    const {children, className, fluid, ...rest} = this.props;
    const isFluid = fluid ? ' fluid' : '';

    return (
      <section className={utils.strim(`container ${isFluid}${className}`)} {...rest}>{children}</section>
    );
  }
}
