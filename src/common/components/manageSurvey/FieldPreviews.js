import React from 'react';
export const OptionField = ({ field }) => (
    <div className="field">
        <h3>{field.question}</h3>
        <em>{field.fieldType}</em>
        {/* <ul>{field.options.map((option, index) => <li key={index}>{option.label}</li>)}</ul>
        <em>{field.answer}</em> */}
    </div>
)
export const TextField = ({ field }) => (
    <div className="field">
        <h3>{field.question}</h3>
        <em>{field.fieldType}</em>
    </div>
)
