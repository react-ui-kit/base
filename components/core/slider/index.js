import React, { PureComponent } from 'react';
import Progress from 'components/charts/progress';
import './style';

export default class Slider extends PureComponent {
  static displayName = 'Slider'

  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    showCounter: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    error: React.PropTypes.bool
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
        <Progress isSlider value={sliderValue} max={max} className={`${colors}`} {...rest}>
          <input
            max={max}
            step={step}
            type={type}
            name={name}
            value={sliderValue}
            className={`slider ${colors}${className}`}
            onChange={this.handleChange.bind(this)}/>
        </Progress>
        {showCounter ? <span className={'max'}>{sliderValue}</span> : null}
      </div>
    );
  }
}
