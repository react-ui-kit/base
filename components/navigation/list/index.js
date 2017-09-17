import React from 'react';
import PropTypes from 'prop-types';
import './style';

export default class List extends React.Component {
  static displayName = 'List'

  static propTypes = {
    className: PropTypes.string,
    center: PropTypes.bool,
    right: PropTypes.bool
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, center, right, ...rest} = this.props;
    const position = center ? 'center ' : right ? 'right ' : '';
    const classNames = ['list', ...position, ...className].join('');
    return (
      <ul className={classNames} {...rest}>
        {children}
      </ul>
    );
  }
}
