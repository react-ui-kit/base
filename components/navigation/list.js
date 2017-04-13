import React from 'react';
import 'sass/navigation/list';

export default class Header extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    center: React.PropTypes.bool,
    right: React.PropTypes.bool
  }

  static defaultProps = {
    className: ''
  }

  renderItems() {
    return React.Children.map(this.props.children, (item, index) => <li>{item}</li>);
  }

  render() {
    const {children, className, center, right, ...rest} = this.props;
    const ListPosition = center ? 'center ' : right ? 'right ' : '';

    return (
      <ul className={`list ${ListPosition}${className}`} {...rest}>
        {this.renderItems.bind(this)()}
      </ul>
    );
  }
}
