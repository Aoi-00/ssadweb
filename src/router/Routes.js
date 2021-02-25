import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
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
