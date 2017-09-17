import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Input extends PureComponent {
  static displayName = 'Input'

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any
  }

  static defaultProps = {
    className: '',
    onChange: undefined,
    type: 'text',
    placeholder: null,
    pattern: null,
    label: null,
    value: undefined
  }

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      value: props.value
    };
  }

  handleChange = (ev) => {
    const { pattern, onChange } = this.props;
    const value = ev.target ? ev.target.value : null;

    this.setState({
      value,
      hasError: false
    });

    if (pattern && value) {
      const regexPattern = new RegExp(pattern, 'g');
      const hasError = !regexPattern.test(value);

      this.setState({ hasError });
    }

    if (onChange) onChange(ev);
    return;
  }

  renderInput = () => {
    const { hasError, value } = this.state;
    const { children, type, placeholder, className, ...rest } = this.props;
    delete rest.onChange;

    if (type && type === 'textarea') {
      return (
        <textarea
          placeholder={placeholder}
          onChange={(ev) => this.handleChange(ev)}
          className={utils.strim(`${className} ${hasError ? 'error' : ''}`)}
          {...rest}>
          {value}
        </textarea>
      );
    }

    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={(ev) => this.handleChange(ev)}
        className={utils.strim(`${className} ${hasError ? 'error' : ''}`)}
        value={value}
        {...rest}>
        {children}
      </input>
    );
  }

  render() {
    const { label } = this.props;
    return (
      <label className={'input'}>
        {label ? <span className={'label'}>{label}</span> : null}
        {this.renderInput()}
      </label>
    );
  }
}

// Input style class
// - :disabled: background color light-grey
// - :required: border color light-orange
