import React, { Component } from 'react';
import SurveyList from '../components/SurveyList';
import survey from '../../tests/exampleSurvey';

export default class EditableSurveys extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tempProps = { surveys: [survey] };
  }

  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcome to the DMI Survey App</h1>
              <h2 className="subtitle">Built with Redux!</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container section">
            <div className="columns is-centered">
              <div className="column is-three-quarters is-narrow">
                <SurveyList surveys={this.tempProps.surveys} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
