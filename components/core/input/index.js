import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Input extends PureComponent {
  static displayName = 'Input'

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
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
        <textarea placeholder={placeholder} className={utils.strim(`${className}`)} {...rest}>{children}</textarea>
      );
    }

    return (
      <input type={type} placeholder={placeholder} className={utils.strim(`${className}`)} {...rest}>{children}</input>
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
