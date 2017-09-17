import React from 'react';
import PropTypes from 'prop-types';
import Button from 'core/button';
import 'sass/forms/forms';

export default class Contact extends React.Component {
  static displayName = 'Contact'

  static propTypes = {
    className: PropTypes.string,
    contactText: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    onContact: PropTypes.func
  }

  static defaultProps = {
    title: 'Login',
    contactText: 'Sign Me In',
    description: null,
    className: '',
    onContact: undefined
  }

  constructor(props) {
    super(props);
    this.renderContactButton = this.renderContactButton.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderContactButton() {
    const { onContact, contactText } = this.props;

    if (!onContact) return null;

    return (
      <Button className={'active'} onClick={onContact.bind(this)}>{contactText}</Button>
    );
  }

  renderDescription() {
    const { description } = this.props;

    if (!description) return null;

    return (
      <div className={'description'}>{description}</div>
    );
  }

  renderMap() {
    // to be implemented
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.onContact; // remove unwanted props
    delete props.contactText;
    delete props.description;

    const {children, className, title, ...rest} = props;
    return (
      <section className={`forms ${className}`} {...rest}>
        <section className={'header'}>
          <div className={'title'}>{title}</div>
        </section>
        <section className={'content'}>
          {this.renderDescription()}
          {children}
        </section>
        <section className={'footer'}>
          {this.renderContactButton()}
        </section>
      </section>
    );
  }
}
