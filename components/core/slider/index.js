import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import Progress from 'components/charts/progress';
import './style';

export default class Slider extends PureComponent {
  static displayName = 'Slider'

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    showCounter: PropTypes.bool,
    success: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    error: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    type: 'range',
    name: 'slider',
    min: 0,
    max: 100,
    value: 1,
    showCounter: false
  }

  constructor(props) {
    super(props);

    this.state = {
      sliderValue: props.value
    };
  }

  handleChange({...ev}) {
    const {onChange} = this.props;
    const {target} = ev;

    this.setState({
      sliderValue: target.valueAsNumber
    });

    return onChange ? onChange(target.valueAsNumber) : this;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sliderValue: nextProps.value
    });
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.children; // remove unwanted props
    delete props.value;
    delete props.defaultValue;

    const { type, className, name, min, max, step, success, info, warning, error, showCounter, ...rest } = props;
    const colors = success ? 'success ' : info ? 'info ' : warning ? 'warning ' : error ? 'error ' : '';
    const { sliderValue } = this.state;

    return (
      <div className={'slider-wrapper'}>
        {showCounter ? <span className={'min'}>{min}</span> : null}
        <Progress isSlider value={sliderValue} max={max} className={utils.strim(colors)} {...rest}>
          <input
            max={max}
            step={step}
            type={type}
            name={name}
            value={sliderValue}
            className={utils.strim(`slider ${colors}${className}`)}
            onChange={(ev) => this.handleChange(ev)}/>
        </Progress>
        {showCounter ? <span className={'max'}>{sliderValue}</span> : null}
      </div>
    );
  }
}
