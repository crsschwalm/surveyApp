import React from 'react';
import { Route } from 'react-router-dom';
import App from '../common/containers/App';
import Home from '../common/pages/Home';
import TakeSurvey from '../common/pages/TakeSurvey';
import SurveyManager from '../common/pages/SurveyManager';
import SurveyResults from '../common/pages/SurveyResults';
import Login from '../common/pages/Login';
import PrivateRoute from './PrivateRoute';
import NavBar from '../common/pages/components/NavBar';
import Footer from '../common/pages/components/Footer';

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Route exact path="/counter" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Login} />
      <PrivateRoute exact path="/admin/manager" component={SurveyManager} />
      <PrivateRoute path="admin/results/:surveyId" component={SurveyResults} />
      <Route path="/survey/:surveyId" component={TakeSurvey} />
      <Footer />
    </div>
  );
};

export default Routes;
