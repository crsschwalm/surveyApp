import React, { Component } from 'react';
import UserOptions from '../components/UserOptions'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <UserOptions />
      </div>
    );
  }
}
