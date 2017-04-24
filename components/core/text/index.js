import React, { PureComponent } from 'react';
import './style';

export default class Text extends PureComponent {
  static displayName = 'Text'

  static propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    uppercase: React.PropTypes.bool,
    lowercase: React.PropTypes.bool,
    capitalize: React.PropTypes.bool,
    h1: React.PropTypes.bool,
    h2: React.PropTypes.bool,
    h3: React.PropTypes.bool,
    h4: React.PropTypes.bool,
    h5: React.PropTypes.bool,
    h6: React.PropTypes.bool
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
        <TextTag className={`text${TextStyle} ${className}`} {...rest}>{children}</TextTag>
    );
  }
}
