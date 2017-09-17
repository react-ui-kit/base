import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Radio extends PureComponent {
  static displayName = 'Radio'

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: ''
  }

  render() {
    const {label, className, ...rest} = this.props;
    return (
      <label className={utils.strim(`radio ${className}`)}>
        {label}
        <input type={'radio'} {...rest} />
        <span className={'indicator'}/>
      </label>
    );
  }
}
