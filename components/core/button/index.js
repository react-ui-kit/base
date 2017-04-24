import React, { PureComponent } from 'react';
import './style';

export default class Button extends PureComponent {
  static displayName = 'Button'

  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'button'
  }

  render() {
    const {children, type, className, ...rest} = this.props;

    return (
      <button type={type} className={`button ${className}`} {...rest}>
        {children}
      </button>
    );
  }
}

// Button style class
// - active: green background & white text
// - big: height 60px
// - full: width 100%
// - round: radius 60px
