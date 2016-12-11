import React, { PureComponent } from 'react';
import 'sass/core/button';

export default class Button extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'button'
  }

  constructor(props) {
    super(props);
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
