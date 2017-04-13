import React, { PureComponent } from 'react';
import 'sass/core/block';

export default class Block extends PureComponent {
  static displayName = 'Block'

  static propTypes = {
    className: React.PropTypes.string,
    xs: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    md: React.PropTypes.bool,
    lg: React.PropTypes.bool,
    full: React.PropTypes.bool,
    row: React.PropTypes.bool,
    column: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    center: React.PropTypes.bool,
    middle: React.PropTypes.bool,
    card: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined,
    full: undefined,
    row: undefined,
    column: undefined,
    inline: null,
    center: null,
    middle: null,
    card: null
  }

  render() {
    const {children, className, xs, sm, md, lg, full, row, column, inline, center, middle, card, ...rest} = this.props;
    const type = !row && column ? 'column ' : 'row ';
    const sizes = xs ? 'xs ' : sm ? 'sm ' : md ? 'md ' : lg ? 'lg ' : full ? 'full ' : '';
    const options = [(card ? ' card ' : null), (inline ? ' inline ' : null), (center ? ' center ' : null), (middle ? ' middle ' : null)].filter(val => val !== null).join(' '); //inline ? ' inline' : center ? ' center' : middle ? ' middle' : '';

    return (
      <section className={`block ${type}${sizes}${options}${className}`} {...rest}>{children}</section>
    );
  }
}
