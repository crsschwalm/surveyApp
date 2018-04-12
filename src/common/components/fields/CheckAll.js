import React, { Component } from 'react';

export default class CheckAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCheckBoxes() {
    return this.props.options.map(option => (
      <label class="checkbox">
        <input id={option.id} type="checkbox" />
        {option.label}
      </label>
    ));
  }

  render() {
    return (
      <div class="field">
        <label class="label">{this.props.fieldTitle}</label>
        <div class="control">{this.renderCheckBoxes()}</div>
      </div>
    );
  }
}
