import React, { PureComponent } from 'react';
import 'sass/core/checkbox';

export default class Checkbox extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: '',
    type: 'checkbox'
  }

  render() {
    const {label, className, type, ...rest} = this.props;

    return (
      <label className={`checkbox ${className}`}>
        {label}
        <input type={type} {...rest} />
        <span className={'indicator'}/>
      </label>
    );
  }
}
