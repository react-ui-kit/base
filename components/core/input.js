import React, { PureComponent } from 'react';
import 'sass/core/input';

export default class Input extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'text',
    placeholder: null,
    label: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, type, label, placeholder, className, ...rest} = this.props;
    return (
      <label className={'input'}>
        {label ? <span className={'label'}>{label}</span> : ''}
        <input type={type} placeholder={placeholder} className={`${className}`} {...rest}>{children}</input>
      </label>
    );
  }
}

// Input style class
// - :disabled: background color light-grey
// - :required: border color light-orange
