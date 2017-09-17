import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Tag extends PureComponent {
  static displayName = 'Tags'

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    accent: PropTypes.bool,
    primary: PropTypes.bool
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
      <label className={utils.strim(`tag ${colors}${className}`)} {...rest}>
        <span className={'text'}>{label}</span>
      </label>
    );
  }
}
