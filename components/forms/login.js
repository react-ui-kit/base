import React from 'react';
import PropTypes from 'prop-types';
import Button from 'core/button';
import 'sass/forms/forms';

export default class Login extends React.Component {
  static displayName = 'Login'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    loginText: PropTypes.string,
    description: PropTypes.string,
    onLogin: PropTypes.func
  }

  static defaultProps = {
    title: 'Login',
    loginText: 'Sign Me In',
    description: null,
    className: '',
    onLogin: undefined
  }

  constructor(props) {
    super(props);
    this.renderLoginButton = this.renderLoginButton.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderLoginButton() {
    const { onLogin, loginText } = this.props;

    if (!onLogin) return null;

    return (
      <Button className={'active'} onClick={onLogin.bind(this)}>{loginText}</Button>
    );
  }

  renderDescription() {
    const { description } = this.props;

    if (!description) return null;

    return (
      <div className={'description'}>{description}</div>
    );
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.onLogin; // remove unwanted props
    delete props.loginText;
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
          {this.renderLoginButton()}
        </section>
      </section>
    );
  }
}

// Login animation example: https://dribbble.com/shots/3122623--WiFi-Login-form-redesign
