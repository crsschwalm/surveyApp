import React from 'react';
import { Route } from 'react-router-dom';
import App from '../common/containers/App';
import Home from '../common/pages/Home';
import TakeSurvey from '../common/pages/TakeSurvey';
import EditableSurveys from '../common/pages/EditableSurveys';
import SurveyResults from '../common/pages/SurveyResults';
import Login from '../common/pages/Login';
import Register from '../common/pages/Register';
import PrivateRoute from './PrivateRoute';
import NavBar from '../common/components/globals/NavBar';
import Footer from '../common/components/globals/Footer';
import survey from '../tests/exampleSurvey';
import ManageSurvey from '../common/components/ManageSurvey'
import OpenSurveys from '../common/pages/OpenSurveys'

const Routes = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <Route exact path="/create" component={ManageSurvey} />

    <Route exact path="/manage" component={EditableSurveys} />
    <Route
      path="/manage/:surveyId"
      render={() => <ManageSurvey survey={survey} />}
    />

    <Route exact path="/surveys" component={OpenSurveys} />
    <Route
      path="/surveys/:surveyId"
      render={() => <TakeSurvey survey={survey} />}
    />
    <PrivateRoute
      path="results/:surveyId"
      component={() => <SurveyResults survey={survey} />}
    />
    <Route exact path="/counter" component={App} />
    <Footer />
  </div>
)

export default Routes;
