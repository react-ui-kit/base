import React from 'react';
import PropTypes from 'prop-types';
import 'sass/forms/forms';
import 'sass/forms/shipping';

export default class Shipping extends React.Component {
  static displayName = 'Shipping'

  static propTypes = {
    className: PropTypes.string,
    subscribeText: PropTypes.string,
    onSubscribe: PropTypes.func
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
