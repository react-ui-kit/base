import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Text extends PureComponent {
  static displayName = 'Text'

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    uppercase: PropTypes.bool,
    lowercase: PropTypes.bool,
    capitalize: PropTypes.bool,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    h6: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    type: 'span'
  }

  render() {
    const {children, className, uppercase, lowercase, capitalize, type, h1, h2, h3, h4, h5, h6, ...rest} = this.props;
    const TextTag = h1 ? 'h1' : h2 ? 'h2' : h3 ? 'h3' : h4 ? 'h4' : h5 ? 'h5' : h6 ? 'h6' : `${type}`;
    const TextStyle = uppercase ? ' uppercase' : lowercase ? ' lowercase' : capitalize ? ' capitalize' : '';
    return (
        <TextTag className={utils.strim(`text${TextStyle} ${className}`)} {...rest}>{children}</TextTag>
    );
  }
}
