import React, { PureComponent } from 'react';
import 'sass/core/dropdown';

export default class DropDown extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || 0,
      visible: false
    };
  }

  handleSelect(optionValue) {
    this.setState({
      selected: optionValue
    });
  }

  renderSelect() {
    let props = Object.assign({}, this.props);
    let optionsList = new Set();

    const { options, ...rest } = props;
    delete props.options;   // remove private props
    delete rest.multiple;   // disabled until multiple feature is done
    delete rest.onClick;
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

    return (
      <ul className={`list${visible ? ' visible' : ''}`}>{list}</ul>
    );
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.options;   // remove protected props
    const {className, ...rest} = props;

    return (
      <label className={`dropdown ${className}`} {...rest}>
        {this.renderSelect()}
        {this.renderList()}
      </label>
    );
  }
}
