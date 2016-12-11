import React, { PureComponent } from 'react';
import 'sass/core/tags';

export default class Tag extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: '',
    accent: undefined,
    primary: undefined
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {className, accent, primary, label, ...rest} = this.props;
    const colors = accent ? 'accent ' : primary ? 'primary ' : '';
    return (
      <label className={`tag ${colors}${className}`} {...rest}>
        <span className={'text'}>{label}</span>
      </label>
    );
  }
}
