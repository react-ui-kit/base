import React, { PureComponent } from 'react';
import 'sass/core/container';

export default class Block extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string,
    fluid: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    fluid: false
  }

  render() {
    const {children, className, fluid, ...rest} = this.props;
    const isFluid = fluid ? ' fluid' : '';

    return (
      <section className={`container ${isFluid}${className}`} {...rest}>{children}</section>
    );
  }
}
