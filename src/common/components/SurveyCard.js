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
        <a class="level-item" aria-label="edit">
          <span class="icon is-medium">
            <i class="fas fa-pencil-alt" aria-hidden="true" />
          </span>
        </a>
        <a class="level-item" aria-label="delete">
          <span class="icon is-medium">
            <i class="fas fa-trash" aria-hidden="true" />
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
      <div class="box">
        <article class="media">
          <div class="media-left">
            <span class="icon is-large">
              <i
                class={`fas fa-2x ${this.props.survey.iconClass || 'fa-bug'}`}
                aria-hidden="true"
              />
            </span>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{this.props.survey.name}</strong>{' '}
                <small>{this.props.survey.author}</small> <br />
                {this.props.survey.description}
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
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
