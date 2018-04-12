import React, { Component } from 'react';

import CheckAll from '../components/fields/CheckAll';
import TextInput from '../components/fields/TextInput';
import SelectFrom from '../components/fields/SelectFrom';

export default class TakeSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderFields() {
    return this.props.survey.fields.map(determineField);
  }

  handleSubmit() {
    return alert('woohoo logged!');
  }

  handleCancel() {
    return alert('boohoo canceled!');
  }

  render() {
    return (
      <section className="container section">
        <div className="columns is-left-aligned">
          <div className="column is-narrow">
            <div className="field">
              {this.renderFields()}
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <a onClick={this.handleSubmit} className="button is-primary">
                    Submit
                  </a>
                </p>
                <p className="control">
                  <a onClick={this.handleCancel} className="button is-light">
                    Cancel
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function determineField(field = { fieldType: undefined }, key) {
  let component;
  switch (field.fieldType) {
    case 'selectFrom':
      component = <SelectFrom key={key} {...field} />;
      break;
    case 'textInput':
      component = <TextInput key={key} {...field} />;
      break;
    case 'checkAll':
      component = <CheckAll key={key} {...field} />;
      break;

    default:
      component = () => {};
      break;
  }
  return component;
}
