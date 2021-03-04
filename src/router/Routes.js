import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Question from '../pages/Question';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tutorial from '../pages/Tutorial';
import Logout from '../pages/Logout';
import Marking from '../pages/Marking';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/question/:id' component={Question} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/marking' component={Marking} />
        <Route path='/logout' component={Logout} />
        <Route
          render={() => <h1>Not Found</h1>}
        />
      </Switch>
    );
  }
}

export default Routes;
