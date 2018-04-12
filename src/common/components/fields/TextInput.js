import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="field">
        <label class="label">{this.props.fieldTitle}</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" />
        </div>
      </div>
    );
  }
}
