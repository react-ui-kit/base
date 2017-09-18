import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Panels from './dashboards/panels';

export default class Examples extends Component {
  static displayName = 'Examples'

  render() {
    return (
      <Router>
        <Switch>
          {/*<Route path='/dashboards' exact component={Dashboard} />*/}
          <Route path='/dashboards/panels' component={Panels} />
        </Switch>
      </Router>
    );
  }
}

render(<Examples />, document.querySelector('.app'));
