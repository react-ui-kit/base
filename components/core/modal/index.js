import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import utils from 'utils';
import './style';

export default class Modal extends PureComponent {
  static displayName = 'Modal'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }

  static defaultProps = {
    open: false,
    className: '',
    title: undefined,
    onOpen: undefined,
    onClose: undefined
  }

  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false
    };
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  }

  renderHeader() {
    const {title} = this.props;

    if (!title) return;

    return (
      <section className={'header'}>
        <div className={'title'}>{title}</div>
        <span
          className={'close'}
          onClick={() => this.toggleOpen()}
          onTouchStart={() => this.toggleOpen()} />
      </section>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open});

    if (nextProps.onOpen && nextProps.open) nextProps.onOpen(this.state);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.onClose && !nextState.open) nextProps.onClose(nextState);
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.onOpen; // remove unwanted props
    delete props.onClose;

    const {open} = this.state;
    const {children, className, ...rest} = props;

    return (
      <section className={utils.strim(`overlay ${open ? 'open' : ''}`)}>
        <section className={utils.strim(`modal ${className}`)} {...rest}>
          {this.renderHeader.bind(this)()}
          <section className={'content'}>{children}</section>
        </section>
      </section>
    );
  }
}
