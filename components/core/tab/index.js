import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Tab extends PureComponent {
  static displayName = 'Tab'

  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    active: false
  }

  render() {
    const {children, className, active, ...rest} = this.props;
    const isActive = active ? 'active' : '';

    return (
      <div className={utils.strim(`tab ${isActive}${className}`)} {...rest}>
        {isActive ? children : null}
      </div>
    );
  }
}
