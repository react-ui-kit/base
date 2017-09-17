import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Quantity extends PureComponent {
  static displayName = 'Quantity'

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    editable: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    placeholder: '',
    type: 'number',
    min: 0,
    max: 10,
    value: 1,
    step: 1,
    editable: false,
    onChange: undefined
  }

  constructor(props) {
    super(props);
    this.state = {
      quantity: props.value
    };
  }

  changeQuantity = (type, {...event}) => {
    let {quantity} = this.state;
    const {min, max, step, onChange} = this.props;

    switch (type) {
      case 'change':
        console.log('changeQuantity', event);
        break;
      case 'minus':
        quantity = quantity - step;
        break;
      default:
        quantity = quantity + step;
        break;
    }

    if (quantity < min) { quantity = min; }
    if (quantity > max) { quantity = max; }

    this.setState({
      quantity: quantity
    });

    const quantityObj = {min, max, step, quantity, value: quantity};

    return onChange ? onChange(quantityObj, this) : quantityObj;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.children; // remove unwanted props
    delete props.value;
    delete props.defaultValue;

    const {type, placeholder, min, max, step, editable, onChange, className, ...rest} = props;
    const {quantity} = this.state;

    return (
      <label className={'quantity'}>
        <button
          className={'minus'}
          onTouchEnd={(ev) => this.changeQuantity('minus', ev)}
          onClick={(ev) => this.changeQuantity('minus', ev)} />
        <input
          type={type}
          min={min}
          max={max}
          step={step}
          value={quantity}
          placeholder={placeholder}
          onChange={!onChange ? ({...event}) => this.changeQuantity('change', event) : onChange.bind(this)}
          className={`${className}`}
          readOnly={editable ? false : true}
          {...rest} />
        <button
          className={'plus'}
          onTouchEnd={(ev) => this.changeQuantity('plus', ev)}
          onClick={(ev) => this.changeQuantity('plus', ev)} />
      </label>
    );
  }
}
