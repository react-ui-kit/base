import React, { PureComponent } from 'react';
import 'sass/charts/progress';

export default class Progress extends PureComponent {
  static displayName = 'ChartProgress'

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.any,
    value: React.PropTypes.number,
    max: React.PropTypes.number,
    isSlider: React.PropTypes.bool,
    success: React.PropTypes.bool,
    info: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    error: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    label: null,
    value: 1,
    max: 100,
    isSlider: false
  }

  constructor(props) {
    super(props);

    this.state = {
      progressValue: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      progressValue: nextProps.value
    });
  }

  render() {
    const {children, className, label, success, info, warning, error, isSlider, max, ...rest} = this.props;
    const colors = success ? 'success ' : info ? 'info ' : warning ? 'warning ' : error ? 'error ' : '';
    const hasSlider = isSlider ? ' progress-slider' : '';
    const { progressValue } = this.state;

    return (
      <label className={`progress${hasSlider}`}>
        {label ? <span className={'text'}>{label}</span> : label}
        <progress className={`${colors}${className}`} defaultValue={progressValue} max={max} {...rest} />
        {children}
      </label>
    );
  }
}
