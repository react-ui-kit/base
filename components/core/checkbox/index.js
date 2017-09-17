import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Checkbox extends PureComponent {
  static displayName = 'Checkbox'

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: '',
    type: 'checkbox'
  }

  render() {
    const {label, className, type, ...rest} = this.props;

    return (
      <label className={utils.strim(`checkbox ${className}`)}>
        {label}
        <input type={type} {...rest} />
        <span className={'indicator'}/>
      </label>
    );
  }
}
