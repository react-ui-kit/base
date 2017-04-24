import React, { PureComponent } from 'react';
import './style';

export default class Tabs extends PureComponent {
  static displayName = 'Tabs'

  static propTypes = {
    className: React.PropTypes.string,
    componentUpdate: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    active: React.PropTypes.number
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
          className={`item ${isActive}`}
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

    return React.Children.map(children, (item, index) => {
      return React.cloneElement(item, { active: active === index });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {componentUpdate} = this.props;
    if (componentUpdate) return componentUpdate;

    return this.state.active !== nextState.active;
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.componentUpdate; // remove unwanted props

    const {className, ...rest} = props;

    return (
      <div className={`tabs ${className}`} {...rest}>
        {this.renderMenu.bind(this)()}
        {this.renderContent.bind(this)()}
      </div>
    );
  }
}
