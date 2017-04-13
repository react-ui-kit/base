import React, { PureComponent } from 'react';
import 'sass/core/radio';

export default class Radio extends PureComponent {
  static displayName = 'Radio'

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: ''
  }

  render() {
    const {label, className, ...rest} = this.props;
    return (
      <label className={`radio ${className}`}>
        {label}
        <input type={'radio'} {...rest} />
        <span className={'indicator'}/>
      </label>
    );
  }
}
