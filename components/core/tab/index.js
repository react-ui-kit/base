import React, { PureComponent } from 'react';
import './style';

export default class Tab extends PureComponent {
  static displayName = 'Tab'

  static propTypes = {
    className: React.PropTypes.string,
    active: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    active: false
  }

  render() {
    const {children, className, active, ...rest} = this.props;
    const isActive = active ? 'active' : '';

    return (
      <div className={`tab ${isActive}${className}`} {...rest}>
        {children}
      </div>
    );
  }
}
