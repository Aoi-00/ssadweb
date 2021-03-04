import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import About from '../pages/About';
import Guide from '../pages/Guide';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RefreshPage from '../pages/RefreshPage';
import Tutorial from '../pages/Tutorial';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/guide' component={Guide} />
        <Route path='/refresh' component={RefreshPage} />
        <Route path='/tutorial' component={Tutorial} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
