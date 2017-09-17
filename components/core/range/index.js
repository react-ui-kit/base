import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import Progress from 'components/charts/progress';
import './style';

// Inspiration: http://codepen.io/rendykstan/pen/VLqZGO

export default class Range extends PureComponent {
  static displayName = 'Range'

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
    name: 'range',
    min: 0,
    max: 100,
    value: 1,
    showCounter: false
  }

  constructor(props) {
    super(props);

    this.state = {
      rangeMinValue: 0,
      rangeMaxValue: props.max
    };
  }

  handleChange = (type, {...ev}) => {
    let {rangeMinValue, rangeMaxValue} = this.state;
    const {onChange} = this.props;
    const {target} = ev;

    switch (type) {
      case 'min':
        rangeMinValue = target.valueAsNumber;
        break;
      default:
        rangeMaxValue = target.valueAsNumber;
    }

    this.setState({
      rangeMinValue: rangeMinValue,
      rangeMaxValue: rangeMaxValue
    });

    return onChange ? onChange({minValue: rangeMinValue, maxValue: rangeMaxValue}) : this;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rangeMinValue: nextProps.min,
      rangeMaxValue: nextProps.max
    });
  }

  render() {
    const { type, className, min, max, step, success, info, warning, error, showCounter } = this.props;
    const colors = success ? 'success ' : info ? 'info ' : warning ? 'warning ' : error ? 'error ' : '';
    let { rangeMinValue, rangeMaxValue } = this.state;

    return (
      <div className={'range-wrapper'}>
        {showCounter ? <span className={'min'}>{rangeMinValue}</span> : null}
        <Progress isSlider={true} value={rangeMinValue} max={max / 2} className={utils.strim(`range-min ${colors}`)}>
          <input
              max={max / 2}
              step={step}
              type={type}
              name={'range-min'}
              value={rangeMinValue}
              className={`range ${colors}${className}`}
              onChange={(ev) => this.handleChange('min', ev)}/>
        </Progress>
        <Progress isSlider={true} value={rangeMaxValue} min={min} max={max} className={utils.strim(`range-max ${colors}`)}>
          <input
              min={min}
              max={max}
              step={step}
              type={type}
              name={'range-max'}
              value={rangeMaxValue}
              className={`range ${colors}${className}`}
              onChange={(ev) => this.handleChange('max', ev)}/>
        </Progress>
        {showCounter ? <span className={'max'}>{rangeMaxValue}</span> : null}
      </div>
    );
  }
}
