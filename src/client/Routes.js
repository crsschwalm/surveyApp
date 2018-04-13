import React from 'react';
import { Route } from 'react-router-dom';
import App from '../common/containers/App';
import Home from '../common/pages/Home';
import TakeSurvey from '../common/pages/TakeSurvey';
import SurveyManager from '../common/pages/SurveyManager';
import SurveyResults from '../common/pages/SurveyResults';
import Login from '../common/pages/Login';
import Register from '../common/pages/Register';
import PrivateRoute from './PrivateRoute';
import NavBar from '../common/pages/components/NavBar';
import Footer from '../common/pages/components/Footer';

import survey from '../tests/exampleSurvey';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Route exact path="/counter" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/admin/manager" component={SurveyManager} />
      <PrivateRoute
        path="admin/results/:surveyId"
        component={() => <SurveyResults survey={survey} />}
      />
      <Route
        path="/survey/:surveyId"
        render={() => <TakeSurvey survey={survey} />}
      />
      <Footer />
    </div>
  );
};

export default Routes;
