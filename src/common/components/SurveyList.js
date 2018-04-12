import React, { Component } from 'react';
import SurveyCard from './SurveyCard';

export default class SurveyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSurveyCards() {
    return this.props.surveys.map(survey => <SurveyCard survey={survey} />);
  }

  render() {
    return this.renderSurveyCards();
  }
}
