import React, { PureComponent } from 'react';
import 'sass/core/tabs';

export default class Tab extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: '',
    active: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {children, className, active, ...rest} = this.props;
    const isActive = active ? 'active' : '';

    return (
      <div className={`tab ${isActive}${className}`} {...rest}>
        {children}
      </div>
    );
  }
}
