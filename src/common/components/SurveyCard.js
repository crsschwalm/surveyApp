import React, { Component } from 'react';
import { isAuthenticated } from '../api/authentication';
export default class SurveyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderAdminOptions() {
    return (
      <div>
        <a className="level-item" aria-label="edit">
          <span className="icon is-medium">
            <i className="fas fa-pencil-alt" aria-hidden="true" />
          </span>
        </a>
        <a className="level-item" aria-label="delete">
          <span className="icon is-medium">
            <i className="fas fa-trash" aria-hidden="true" />
          </span>
        </a>
      </div>
    );
  }

  renderUserOptions() {
    return (
      <a
        href={`/survey/${this.props.survey.id}`}
        className="button is-link is-medium level-item"
      >
        Take Survey
      </a>
    );
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <span className="icon is-large">
              <i
                className={`fas fa-2x ${this.props.survey.iconClass ||
                  'fa-bug'}`}
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.survey.name}</strong>{' '}
                <small>{this.props.survey.author}</small> <br />
                {this.props.survey.description}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                {isAuthenticated()
                  ? this.renderAdminOptions()
                  : this.renderUserOptions()}
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}
