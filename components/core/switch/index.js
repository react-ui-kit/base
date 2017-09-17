import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Switch extends PureComponent {
  static displayName = 'Switch'

  static propTypes = {
    className: PropTypes.string,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    type: PropTypes.string
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
      <label className={utils.strim(`switch ${className}`)}>
        {offLabel}
        <input type={type} {...rest} />
        <span className={'indicator'}/>
        {onLabel}
      </label>
    );
  }
}
