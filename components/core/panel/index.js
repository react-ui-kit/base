import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

const ALIGN_VALUES = [
  'start', 'end', 'center', 'baseline', 'stretch'
];

export default class Panel extends PureComponent {
  static displayName = 'Panel'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, align, ...rest} = this.props;
    const alignClasses = align && ALIGN_VALUES.includes(align) ? `align-${align}` : '';

    return (
      <section className={utils.strim(`panel ${className} ${alignClasses}`)} {...rest}>
        {children}
      </section>
    );
  }
}
