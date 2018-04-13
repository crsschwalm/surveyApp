import React, { Component } from 'react';
import SurveyCard from './SurveyCard';

export default class SurveyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSurveyCards() {
    return this.props.surveys.map((survey, index) => (
      <SurveyCard survey={survey} key={index} />
    ));
  }

  render() {
    return this.renderSurveyCards();
  }
}
