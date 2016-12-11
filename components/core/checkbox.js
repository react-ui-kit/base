import React, { PureComponent } from 'react';
import 'sass/core/checkbox';

export default class Checkbox extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: '',
    type: 'checkbox'
  }

  constructor(props) {
    super(props);
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
