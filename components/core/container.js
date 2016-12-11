import React, { PureComponent } from 'react';
import 'sass/core/container';

export default class Block extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, fluid, ...rest} = this.props;
    const isFluid = fluid ? ' fluid' : '';

    return (
      <section className={`container ${isFluid}${className}`} {...rest}>{children}</section>
    );
  }
}
