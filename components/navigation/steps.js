import React, { PureComponent } from 'react';
import 'sass/navigation/steps';

export default class Steps extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string,
  }

  static defaultProps = {
    className: '',
    steps: 5,
    current: 1,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.current
    }
  }

  handleCurrentStep(page) {
    const {steps} = this.props;
    const {currentStep} = this.state;
    const nextPage = page < 1 ? 1 : page > steps ? steps : page;

    this.setState({currentStep: nextPage});
  }

  renderSteps() {
    const {steps, accent, primary, large} = this.props;
    const {currentStep} = this.state;
    const colors = accent ? ' accent ' : primary ? ' primary ' : '';
    const isLarge = large ? ' large ' : '';
    let pagination = [];

    for (let i=1; i<=steps; i++) {
      const isActive = i <= currentStep ? ' active' : '';
      pagination.push(
        <li key={`step-${i}`}
          className={`step${isActive}${colors}${isLarge}`}
          onClick={this.handleCurrentStep.bind(this, i)} />
      )
    }

    return pagination;
  }

  renderPrev() {
    const {controls} = this.props;
    const {currentStep} = this.state;

    if (controls) {
      return (
        <li className={'prev'} onClick={this.handleCurrentStep.bind(this, (currentStep-1))} />
      )
    }

    return null;
  }


  renderNext() {
    const {controls} = this.props;
    const {currentStep} = this.state;

    if (controls) {
      return (
        <li className={'next'} onClick={this.handleCurrentStep.bind(this, (currentStep+1))} />
      )
    }

    return null;
  }

  render() {
    const {children, className, steps, current, accent, primary, large, controls, ...rest} = this.props;
    const hasControls = controls ? 'controls' : '';

    return (
      <ul className={`steps ${hasControls}${className}`} {...rest}>
        {this.renderPrev.bind(this)()}
        {this.renderSteps.bind(this)()}
        {this.renderNext.bind(this)()}
      </ul>
    );
  }
}
