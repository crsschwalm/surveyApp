import React, { Component } from 'react';

export default class SelectFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { value };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderDropDownOptions() {
    return this.props.options.map(option => (
      <option id={option.id} value={option.label}>
        {option.label}
      </option>
    ));
  }

  render() {
    return (
      <div class="field">
        <label class="label">{this.props.fieldTitle}</label>
        <div class="control">
          <div class="select">
            <select value={this.state.value} onChange={this.handleChange}>
              {this.renderDropDownOptions()}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
