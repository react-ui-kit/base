import React, { PureComponent } from 'react';
import './style';

export default class Input extends PureComponent {
  static displayName = 'Input'

  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'text',
    placeholder: null,
    label: null
  }

  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput() {
    const {children, type, placeholder, className, ...rest} = this.props;

    if (type && type === 'textarea') {
      return (
        <textarea placeholder={placeholder} className={`${className}`} {...rest}>{children}</textarea>
      );
    }

    return (
      <input type={type} placeholder={placeholder} className={`${className}`} {...rest}>{children}</input>
    );
  }

  render() {
    const { label } = this.props;
    return (
      <label className={'input'}>
        {label ? <span className={'label'}>{label}</span> : ''}
        {this.renderInput()}
      </label>
    );
  }
}

// Input style class
// - :disabled: background color light-grey
// - :required: border color light-orange
