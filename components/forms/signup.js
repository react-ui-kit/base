import React from 'react';
import Button from 'core/button';
import 'sass/forms/forms';

export default class SignUp extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    signupText: React.PropTypes.string,
    description: React.PropTypes.string,
    onSignUp: React.PropTypes.func
  }

  static defaultProps = {
    title: 'SignUp',
    className: '',
    signupText: 'Sign Me In',
    description: null,
    onSignUp: undefined
  }

  constructor(props) {
    super(props);
    this.renderSignUpButton = this.renderSignUpButton.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderSignUpButton() {
    const { onSignUp, signupText } = this.props;

    if (!onSignUp) return null;

    return (
      <Button className={'active'} onClick={onSignUp.bind(this)}>{signupText}</Button>
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
    delete props.onSignUp; // remove unwanted props
    delete props.signupText;
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
          {this.renderSignUpButton()}
        </section>
      </section>
    );
  }
}
