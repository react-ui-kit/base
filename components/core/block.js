import React, { PureComponent } from 'react';
import 'sass/core/block';

export default class Block extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined,
    full: undefined,
    inline: null,
    center: null,
    middle: null,
    card: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, xs, sm, md, lg, full, inline, center, middle, card, ...rest} = this.props;
    const sizes = xs ? ' xs' : sm ? ' sm' : md ? ' md' : lg ? ' lg' : full ? ' full' : '';
    const options = [(card ? 'card' : null), (inline ? 'inline' : null), (center ? 'center' : null), (middle ? 'middle' : null)].filter(val => val !== null).join(' '); //inline ? ' inline' : center ? ' center' : middle ? ' middle' : '';

    return (
      <section className={`block${sizes} ${options} ${className}`} {...rest}>{children}</section>
    );
  }
}
