import React from 'react';
import PropTypes from 'prop-types';
import Button from 'core/button';
import 'sass/forms/forms';
import 'sass/forms/subscribe';

export default class Subscribe extends React.Component {
  static displayName = 'Subscribe'

  static propTypes = {
    className: PropTypes.string,
    subscribeText: PropTypes.string,
    accent: PropTypes.bool,
    onSubscribe: PropTypes.func
  }

  static defaultProps = {
    className: '',
    subscribeText: 'Subscribe',
    onSubscribe: undefined
  }

  constructor(props) {
    super(props);
    this.renderSubscribeButton = this.renderSubscribeButton.bind(this);
  }

  renderSubscribeButton() {
    const { onSubscribe, subscribeText } = this.props;

    if (!onSubscribe) return null;

    return (
      <Button className={'active full'} onClick={onSubscribe.bind(this)}>
        {subscribeText}
      </Button>
    );
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.onSubscribe; // remove unwanted props
    delete props.subscribeText;

    const {children, className, accent, ...rest} = props;
    return (
      <section className={`forms subscribe ${accent ? 'accent ' : ''}${className}`} {...rest}>
        <section className={'content'}>
          {children}
        </section>
        <section className={'footer'}>
          {this.renderSubscribeButton()}
        </section>
      </section>
    );
  }
}
