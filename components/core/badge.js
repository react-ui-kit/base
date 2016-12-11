import React, { PureComponent } from 'react';
import 'sass/core/badge';

export default class Badge extends PureComponent {
  static propTypes = {
    name: React.PropTypes.string
  }

  static defaultProps = {
    className: null
  }

  constructor(props) {
    super(props);
  }

  getClassNames() {
    let {className, round, border} = this.props;
    let classes = 'badge';

    classes = round && border ? `${classes} round border` : round ? `${classes} round` : border ? `${classes} border` : 'badge';
    className = className ? ` ${className}` : '';

    return `${classes}${className}`;
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.className; // remove unwanted props
    delete props.round;
    delete props.border;

    const {children, ...rest} = props;

    return (
      <span className={`${this.getClassNames()}`} {...rest}>{children}</span>
    );
  }
}
