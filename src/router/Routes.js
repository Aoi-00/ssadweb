import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Question from '../pages/Question';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tutorial from '../pages/Tutorial';
import Logout from '../pages/Logout';
import Marking from '../pages/Marking';
import MarkingHome from '../pages/MarkingHome';
import StudentSelect from '../pages/StudentSelect';
import StudentMain from '../pages/StudentMain';
import StudentProfile from '../pages/StudentProfile';
import StudentHome from '../pages/StudentHome';
import ProfessorProfile from '../pages/ProfessorProfile';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/question/:id' component={Question} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/seltut' component={MarkingHome} />
        <Route path='/student/:tutid' component={StudentSelect} />
        <Route path='/marking/:id/:studid' component={Marking} />
        <Route path='/logout' component={Logout} />
        <Route path='/studentmain' component={StudentMain} />
        <Route path='/studentprofile' component={StudentProfile} />
        <Route path='/professorprofile' component={ProfessorProfile} />
        <Route path='/studenthome' component={StudentHome} />
        <Route
          render={() => <h1>Not Found</h1>}
        />
      </Switch>
    );
  }
}

export default Routes;
