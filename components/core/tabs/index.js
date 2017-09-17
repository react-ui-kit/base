import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';

import './style';

export default class Tabs extends Component {
  static displayName = 'Tabs'

  static propTypes = {
    className: PropTypes.string,
    componentUpdate: PropTypes.bool,
    onClick: PropTypes.func,
    onTouchStart: PropTypes.func,
    active: PropTypes.number
  }

  static defaultProps = {
    className: '',
    componentUpdate: undefined
  }

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  handleMenuToggle(index, event) {
    const {onClick, onTouchStart} = this.props;

    event.preventDefault();
    event.stopPropagation();

    this.setState({ active: index });

    return onClick ? onClick() : onTouchStart ? onTouchStart() : undefined;
  }

  renderMenu() {
    const {children} = this.props;
    const {active} = this.state;

    let tabsMenu = '';

    tabsMenu = React.Children.map(children, (item, index) => {
      const isActive = active === index ? 'active' : '';

      return (
        <a
          href={item.props.href || '#'}
          className={utils.strim(`item ${isActive}`)}
          onClick={this.handleMenuToggle.bind(this, index)}
          onTouchStart={this.handleMenuToggle.bind(this, index)}>
          {item.props.label}
        </a>
      );
    });

    return (
      <div className={'tabs-menu'}>{tabsMenu}</div>
    );
  }

  renderContent() {
    const {children} = this.props;
    const {active} = this.state;

    return React.Children.map(children, (element, index) => {
      return (
        <element.type {...element.props} active={active === index}>
          {element.props.children}
        </element.type>
      );
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const {componentUpdate} = this.props;
  //   if (componentUpdate) return componentUpdate;

  //   return this.state.active !== nextState.active;
  // }

  render() {
    let props = Object.assign({}, this.props);
    delete props.componentUpdate; // remove unwanted props

    const {className, ...rest} = props;

    return (
      <div className={utils.strim(`tabs ${className}`)} {...rest}>
        {this.renderMenu.bind(this)()}
        {this.renderContent.bind(this)()}
      </div>
    );
  }
}
