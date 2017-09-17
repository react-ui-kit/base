import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Block extends PureComponent {
  static displayName = 'Block'

  static propTypes = {
    className: PropTypes.string,
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    full: PropTypes.bool,
    row: PropTypes.bool,
    column: PropTypes.bool,
    inline: PropTypes.bool,
    center: PropTypes.bool,
    middle: PropTypes.bool,
    card: PropTypes.bool
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
      <section className={utils.strim(`block ${type}${sizes}${options}${className}`)} {...rest}>{children}</section>
    );
  }
}
