import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Question from '../pages/Question';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Assignment from '../pages/Assignment';
import Logout from '../pages/Logout';
import Marking from '../pages/Marking';
import MarkingHome from '../pages/MarkingHome';
import StudentSelect from '../pages/StudentSelect';
import StudentMain from '../pages/StudentMain';
import StudentProfile from '../pages/StudentProfile';
import ProfessorProfile from '../pages/ProfessorProfile';
import StudentNews from '../pages/StudentNews';
import Compete from '../pages/Compete';
import Challenger from '../pages/Challenger';
import Competitor from '../pages/Competitor';
import Challenge from '../pages/Challenge';
import MySubmission from '../pages/MySubmission';
import Report from '../pages/Report';
import ReportHome from '../pages/ReportHome';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/question/:tutid' component={Question} />
        <Route path='/assignment' component={Assignment} />
        <Route path='/seltut' component={MarkingHome} />
        <Route path='/student/:tutid' component={StudentSelect} />
        <Route path='/marking/:id/:studid' component={Marking} />
        <Route path='/logout' component={Logout} />
        <Route path='/studentmain' component={StudentMain} />
        <Route path='/studentprofile' component={StudentProfile} />
        <Route path='/professorprofile' component={ProfessorProfile} />
        <Route path='/studentnews' component={StudentNews} />
        <Route path='/compete' component={Compete} />
        <Route path='/challenger' component={Challenger} />
        <Route path='/competitor' component={Competitor} />
        <Route path='/submission/:id' component={MySubmission} />
        <Route path='/report' component={Report} />
        <Route path='/reporthome' component={ReportHome} />
        <Route path='/challenge' component={Challenge} />
        
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    );
  }
}

export default Routes;
