import React from 'react'
import { OptionField, TextField } from './FieldPreviews';

const ExistingFields = ({ fields }) => {
    const listItems = fields.map((field, index) => <li key={index}>{determineField(field)}</li>)
    return <ul>{listItems}</ul>
}

export default ExistingFields;

function determineField(field = { fieldType: undefined }, key) {
    let component;
    switch (field.fieldType) {
        case 'selectFrom':
        case 'checkAll':
            component = <OptionField key={key} field={field} />;
            break;
        case 'textInput':
            component = <TextField key={key} field={field} />;
            break;

        default:
            component = () => { };
            break;
    }
    return component;
}