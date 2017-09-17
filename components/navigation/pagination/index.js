import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style';

export default class Pagination extends PureComponent {
  static displayName = 'Pagination'

  static propTypes = {
    className: PropTypes.string,
    pages: PropTypes.number,
    current: PropTypes.number,
    controls: PropTypes.bool,
    disabled: PropTypes.bool,
    accent: PropTypes.bool,
    primary: PropTypes.bool,
    large: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    pages: 5,
    current: 1,
    controls: false,
    disabled: false
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.current
    };
  }

  handleCurrentPage(page) {
    const {pages} = this.props;
    const nextPage = page < 1 ? 1 : page > pages ? pages : page;

    this.setState({currentPage: nextPage});
  }

  renderPages() {
    const {pages, accent, primary, disabled} = this.props;
    const {currentPage} = this.state;
    const colors = accent ? ' accent ' : primary ? ' primary ' : '';
    let pagination = [];

    for (let i = 1; i <= pages; i++) {
      const isActive = i <= currentPage ? ' active' : '';
      pagination.push(
        <li key={`page-${i}`}
          className={`page${isActive}${colors}`}
          onClick={!disabled ? this.handleCurrentPage.bind(this, i) : () => {}} />
      );
    }

    return pagination;
  }

  componentWillReceiveProps(nextProps) {
    this.handleCurrentPage(nextProps.current);
  }

  renderPrev() {
    const {controls} = this.props;
    const {currentPage} = this.state;

    if (controls) {
      return (
        <li className={'prev'} onClick={this.handleCurrentPage.bind(this, currentPage - 1)} />
      );
    }

    return null;
  }


  renderNext() {
    const {controls} = this.props;
    const {currentPage} = this.state;

    if (controls) {
      return (
        <li className={'next'} onClick={this.handleCurrentPage.bind(this, currentPage + 1)} />
      );
    }

    return null;
  }

  render() {
    let props = Object.assign({}, this.props);
    delete props.children; // remove unwanted props
    delete props.pages;
    delete props.current;
    delete props.accent;
    delete props.primary;
    delete props.large;
    delete props.disabled;

    const {className, controls, ...rest} = props;
    const hasControls = controls ? ' controls' : '';
    const isLarge = this.props.large ? ' large' : '';

    return (
      <ul className={`pagination${hasControls}${isLarge} ${className}`} {...rest}>
        {this.renderPrev()}
        {this.renderPages()}
        {this.renderNext()}
      </ul>
    );
  }
}
