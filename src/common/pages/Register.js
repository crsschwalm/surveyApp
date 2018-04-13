import React, { Component } from 'react';
import request from 'request-promise';
import resolveUrl from 'resolve-url';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doPasswordsMatch = this.doPasswordsMatch.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    return request({
      url: resolveUrl('/api/register'),
      method: 'POST',
      json: this.state
    }).catch(err => this.setState({ error: err }));
  }

  doPasswordsMatch() {
    return this.state.password === this.state.passwordConfirmation;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderCheckMark() {
    return (
      <span className="icon is-small is-right">
        <i className="fas fa-check" />
      </span>
    );
  }
  renderErrorX() {
    return (
      <span className="icon is-small is-right">
        <i className="fas fa-times" />
      </span>
    );
  }

  isValid() {
    return (
      this.state.username &&
      this.state.password &&
      this.state.passwordConfirmation &&
      this.doPasswordsMatch()
    );
  }

  render() {
    return (
      <section className="section">
        {!!this.state.error ? <h2>{this.state.error}</h2> : null}
        {!!this.props.error ? <h2>{this.props.error}</h2> : null}
        <form className="container section" onSubmit={this.handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
              {!!this.state.username ? this.renderCheckMark() : null}
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
              {!!this.state.password ? this.renderCheckMark() : null}
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
              {this.doPasswordsMatch()
                ? this.renderCheckMark()
                : this.renderErrorX()}
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                type="submit"
                disabled={!this.isValid()}
                className="button is-success"
              >
                Register
              </button>
            </p>
          </div>
        </form>
      </section>
    );
  }
}
