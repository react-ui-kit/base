import React from 'react';
import 'sass/forms/forms';
import 'sass/forms/shipping';

export default class Shipping extends React.Component {
  static displayName = 'Shipping'

  static propTypes = {
    className: React.PropTypes.string,
    subscribeText: React.PropTypes.string,
    onSubscribe: React.PropTypes.func
  }

  static defaultProps = {
    subscribeText: 'Subscribe',
    className: '',
    onSubscribe: undefined
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.onSubscribe; // remove unwanted props
    delete props.subscribeText;

    const {children, className, ...rest} = props;
    return (
      <section className={`forms shipping ${className}`} {...rest}>
        <section className={'content'}>
          {children}
        </section>
      </section>
    );
  }
}
