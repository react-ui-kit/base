import React, { PureComponent } from 'react';
import './style';

export default class Switch extends PureComponent {
  static displayName = 'Switch'

  static propTypes = {
    className: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string,
    type: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    onLabel: '',
    offLabel: '',
    type: 'checkbox'
  }

  render() {
    const {onLabel, offLabel, className, type, ...rest} = this.props;

    return (
      <label className={`switch ${className}`}>
        {offLabel}
        <input type={type} {...rest} />
        <span className={'indicator'}/>
        {onLabel}
      </label>
    );
  }
}
