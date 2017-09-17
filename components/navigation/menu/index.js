import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

const MenuItem = props => {
  const {children, className, submenu, ...rest} = props;
  return (
    <li className={`${submenu ? 'submenu ' : 'item '}${className || ''}`} {...rest}>{children}</li>
  );
};

export default class Menu extends PureComponent {
  static displayName = 'Menu'

  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    submenu: PropTypes.bool,
    title: PropTypes.string
  }

  static defaultProps = {
    className: '',
    open: false,
    submenu: false,
    title: undefined
  }

  constructor(props) {
    super(props);
    this.state = {
      isVisible: []
    };
  }

  // toggle isVisible state for submenu ID
  toggleMenu(id) {
    let {isVisible} = this.state;

    isVisible[id] = !isVisible[id];

    this.setState({
      isVisible: isVisible
    });
  }

  componentWillMount() {
    const {children} = this.props;
    let {isVisible} = this.state;

    // create isVisible list of submenu IDs & set isVisible state
    React.Children.map(children, (item, index) => {
      const type = item.type;
      if (typeof type === 'function' && type.name === 'Menu') isVisible[index] = false;
    });

    this.setState({
      isVisible: isVisible
    });
  }

  renderItems() {
    const {children, title} = this.props;
    let {isVisible} = this.state;
    let menuHeader = null;

    // generate menu header from title props
    if (title) {
      menuHeader = <li className={'item'} key={'title'}>{title}</li>;
    }

    // return a list containing menuHeader + MenuItem or SubMenu list
    return [
      menuHeader,
      React.Children.map(children, (item, index) => {
        // return a MenuItem for non subMenu
        if (typeof item.type === 'string' && item.type.displayName !== 'Menu') {
          const {children: itemChildren, ...itemRest} = item.props;
          return (
            <MenuItem {...itemRest}>{itemChildren}</MenuItem>
          );
        }

        const menuIsVisible = isVisible[index] ? ' open' : '';

        // generate subMenu items using MenuItem
        const subMenu = React.Children.map(item.props.children, (subItem, subIndex) => {
          const {...subItemProps} = subItem.props;
          return (
            <MenuItem key={`subMenu-${subIndex}`} {...subItemProps}>{subItem.props.children}</MenuItem>
          );
        });

        // return a list containing MenuItem for subMenu title + subMenu items
        let itemProps = Object.assign({}, item.props);
        delete itemProps.children; // remove unwanted props

        const {title: menuTitle, className: menuClassName, ...menuRest} = itemProps;
        return ([
          <MenuItem
            className={`hasSubmenu${menuIsVisible}${menuClassName || ''}`}
            onClick={this.toggleMenu.bind(this, index)}
            {...menuRest}>
            {menuTitle}
          </MenuItem>,
          <ul className={`submenu${menuIsVisible}`}>{subMenu}</ul>
        ]);
      })
    ];
  }

  shouldComponentUpdate(nextProps, nextState) {
    // compare array nextState.isVisible against this.state.isVisible using stringify
    return (JSON.stringify(nextState.isVisible) === JSON.stringify(this.state.isVisible));

    /*
    // return true to always update the menu list items
    return true;
    */
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.children; // remove unwanted props
    delete props.title;
    delete props.submenu;
    delete props.open;

    const {className, ...rest} = props;

    return (
      <ul className={`menu ${className}`} {...rest}>
        {this.renderItems.bind(this)()}
      </ul>
    );
  }
}
