import React, { PureComponent } from 'react';
import 'sass/core/tags';

export default class Tag extends PureComponent {
  static displayName = 'Tags'

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    accent: React.PropTypes.bool,
    primary: React.PropTypes.bool
  }

  static defaultProps = {
    className: '',
    label: '',
    accent: undefined,
    primary: undefined
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
