import React, { Component } from 'react';

export default class ManageSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = { fields: [] };
        this.handleNewFieldSelection = this.handleNewFieldSelection.bind(this)
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

    handleNewFieldSelection = (e) => {
        this.state.fields.push({ fieldType: e.target.name })
        this.setState({ fields: this.state.fields });
    }

    render() {
        const fieldCount = this.state.fields.length;
        return (
            <section className="container section">
                <h1 className="title">Create Survey</h1>
                <h2 className="subtitle">`${fieldCount} - fields`</h2>
                <div className="columns is-left-aligned">
                    <FieldList fields={this.state.fields} />
                    <div className="column is-narrow">
                        <NewFieldForm addNewField={this.handleNewFieldSelection} />
                    </div>
                </div>
            </section>
        );
    }
}

const NewFieldForm = ({ addNewField }) => (
    <div className="selection">
        <a className="button is-rounded" name="selectFrom" onClick={addNewField}>Select From</a>
        <a className="button is-primary is-rounded" name="checkAll" onClick={addNewField}>Check All</a>
        <a className="button is-link is-rounded" name="textInput" onClick={addNewField}>Text Input</a>
    </div>
)

const FieldList = ({ fields }) => fields.map(determineField)

const OptionField = ({ field }) => (
    <div className="field">
        <h3>{field.title}</h3>
        <p>{field.question}</p>
        <ul>{field.options.map((option, index) => <li key={index}>{option.label}</li>)}</ul>
        <em>{field.answer}</em>
    </div>
)
const TextField = ({ field }) => (
    <div className="field">
        <h3>{field.title}</h3>
        <p>{field.question}</p>
        <em>{field.answer}</em>
    </div>
)


function determineField(field = { fieldType: undefined }, key) {
    let component;
    switch (field.fieldType) {
        case 'selectFrom':
        case 'checkAll':
            component = <OptionField key={key} {...field} />;
            break;
        case 'textInput':
            component = <TextField key={key} {...field} />;
            break;

        default:
            component = () => { };
            break;
    }
    return component;
}