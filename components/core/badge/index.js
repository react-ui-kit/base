import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Badge extends PureComponent {
  static displayName = 'Badge'

  static propTypes = {
    className: PropTypes.string,
    round: PropTypes.bool,
    border: PropTypes.bool
  }

  static defaultProps = {
    className: null
  }

  getClassNames() {
    let {className, round, border} = this.props;
    let classes = 'badge';

    classes = round && border ? `${classes} round border` : round ? `${classes} round` : border ? `${classes} border` : 'badge';
    className = className ? ` ${className}` : '';

    return `${classes}${className}`;
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.className; // remove unwanted props
    delete props.round;
    delete props.border;

    const {children, ...rest} = props;

    return (
      <span className={utils.strim(`${this.getClassNames()}`)} {...rest}>{children}</span>
    );
  }
}
