import React from 'react';
import 'sass/footers/footer';

export default class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, center, className, ...rest} = this.props;
    const isCenter = center ? ' center' : '';
    return (
      <footer className={`footer${isCenter} ${className}`} {...rest}>{children}</footer>
    );
  }
}
