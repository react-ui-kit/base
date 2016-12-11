import React, { PureComponent } from 'react';
import 'sass/core/radio';

export default class Radio extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: ''
  }

  constructor(props) {
    super(props);
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
