import React, { PureComponent } from 'react';
import 'sass/core/text';

export default class Text extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    type: 'span'
  }

  constructor(props) {
    super(props);
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
