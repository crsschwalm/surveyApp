import React, { Component } from 'react';
import ManageField from './ManageField'
import ExistingFields from './ExistingFields'

export default class ManageSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = { fields: [] };
        this.handleSaveField = this.handleSaveField.bind(this)
    }

    addField = (fieldOptions) => {
        this.state.fields.push(fieldOptions);
        this.setState({ fields: this.state.fields });
    }

    handleSubmit() {
        return alert('woohoo logged!');
    }

    handleCancel() {
        return alert('boohoo canceled!');
    }

    handleSaveField = (field) => {
        this.state.fields.push(field)
        this.setState({ fields: this.state.fields });
    }

    render() {
        const fieldCount = this.state.fields.length;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">{`${fieldCount} - fields`}</h2>
                <div className="columns is-left-aligned">
                    <div className="column is-narrow">
                        <ExistingFields fields={this.state.fields} />
                        <ManageField saveField={this.handleSaveField} />
                    </div>
                </div>
            </section>
        );
    }
}