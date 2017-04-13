import React from 'react';
import 'sass/navigation/list';

export default class List extends React.Component {
  static displayName = 'List'

  static propTypes = {
    className: React.PropTypes.string,
    center: React.PropTypes.bool,
    right: React.PropTypes.bool
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
