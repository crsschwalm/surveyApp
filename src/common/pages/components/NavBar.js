import React, { Component } from 'react';
import { isAuthenticated } from '../../api/authentication';

export default class NavBar extends Component {
  renderLoginButton = () => (
    <a className="button is-primary" href="/login">
      <span>Admin Login</span>
      <span className="icon">
        <i className="fas fa-arrow-circle-right" />
      </span>
    </a>
  );

  renderLogoutButton = () => (
    <a className="button is-primary" href="/">
      <span>Logout</span>
      <span className="icon">
        <i className="fas fa-arrow-circle-right" />
      </span>
    </a>
  );


  renderAdminOptions = () => (
    <div className="navbar-start">
      <a className="navbar-item" href="/admin/manager">
        Manage Surveys
        </a>
      <a className="navbar-item" href="/admin/manager">
        Survey Results
        </a>
    </div>
  );

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://dminc.com/location/indianapolis-in/"
          >
            DMI
          </a>
        </div>

        <div className="navbar-menu">
          {isAuthenticated() ? this.renderAdminOptions() : null}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  {isAuthenticated()
                    ? this.renderLogoutButton()
                    : this.renderLoginButton()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
