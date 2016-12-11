import React, { PureComponent } from 'react';
import 'sass/core/switch';

export default class Switch extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    onLabel: '',
    offLabel: '',
    type: 'checkbox'
  }

  constructor(props) {
    super(props);
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
