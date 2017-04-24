import React, { PureComponent } from 'react';
import './style';

export default class DropDown extends PureComponent {
  static displayName = 'DropDown'

  static propTypes = {
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array,
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    options: [],
    onChange: undefined
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || 0,
      visible: false
    };

    this.getBottomPosition = this.getBottomPosition.bind(this);
  }

  handleSelect(optionValue) {
    const { onChange } = this.props;
    this.setState({
      selected: optionValue
    });
    if (onChange) onChange(optionValue);
  }

  getBottomPosition() {
    if (!this.dropdown) return 0;

    // +20px margin top & bottom
    return window.innerHeight - (this.dropdown.getBoundingClientRect().bottom + 20);
  }

  renderSelect() {
    let props = Object.assign({}, this.props);
    let optionsList = new Set();

    const { options, ...rest } = props;
    delete props.options;   // remove private props
    delete rest.multiple;   // disabled until multiple feature is done
    delete rest.onChange;
    delete rest.style;

    options.map((option, index) => {
      if (option.value && option.label) {
        const optionValue = option.value || option.label;
        optionsList.add(<option key={option.value} value={optionValue}>{option.label}</option>);
      }
    });

    return (
      <select
        value={this.state.selected}
        onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}
        {...rest}>
        {optionsList}
      </select>
    );
  }

  renderList() {
    const { visible, selected } = this.state;
    const { options } = this.props;
    let list = new Set();

    options.map((option, index) => {
      if (option.value && option.label) {
        const optionValue = option.value || option.label;
        const optionSelected = optionValue === selected;

        list.add(<li
          key={option.value}
          className={`item${optionSelected ? ' selected' : ''}`}
          data-value={optionValue}
          onClick={this.handleSelect.bind(this, optionValue)}>
          {option.label}
        </li>);
      }
    });

    if (list.size === 0) return null;

    const positionTop = this.getBottomPosition() < 0;

    return (
      <ul className={`list${visible ? ' visible' : ''}${positionTop ? ' top' : ''}`}>{list}</ul>
    );
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.options;   // remove protected props
    const {className, label, disabled, ...rest} = props;

    return (
      <label className={`dropdown ${className}`} ref={(c) => {this.dropdown = c;}} {...rest}>
        {label ? <span className={'label'}>{label}</span> : null}
        {this.renderSelect()}
        {this.renderList()}
        {!disabled ? <span className={'caret'} /> : null}
      </label>
    );
  }
}
