import React, { Component } from 'react';

export default class ManageOptions extends Component {
    constructor(props) {
        super(props)
        this.state = { optionToAdd: '', options: [], finalized: false }
        this.unFinalizeInput = this.unFinalizeInput.bind(this)
        this.finalizeInput = this.finalizeInput.bind(this)
    }
    handleChange = (event) => this.setState({ optionToAdd: event.target.value })
    _handleKeyPress = (event) => {
        if (event.key === 'Enter' && !!this.state.optionToAdd) {
            const text = this.state.optionToAdd;
            this.state.options.push({ text: text, value: camelize(text) });
            this.setState({ optionToAdd: '', options: this.state.options })
        }
    }
    handleRemove = (value) => {
        const options = this.state.options.filter(option => option.value !== value);
        this.setState({ options: options })
    }

    isDisabled = () => this.state.finalized ? 'disabled' : false
    unFinalizeInput = () => this.setState({ finalized: false })
    finalizeInput = () => {
        this.setState({ finalized: true });
        return this.props.onSubmit(this.state.options)
    }
    renderOptions = () => {
        const someSeparation = { padding: '1em' };
        return this.state.options.map((option, index) => (
            <li style={someSeparation} key={index} id={option.value}>
                {option.text}
                <span style={someSeparation} onClick={() => this.handleRemove(option.value)} >
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </span>
            </li>)
        )
    }

    render() {
        return (
            <div>
                <div className="field">
                    <div className="control">
                        <input className="input is-info" type="text" placeholder="Give an Option" value={this.state.optionToAdd} onChange={this.handleChange} onKeyPress={this._handleKeyPress} disabled={this.isDisabled()} />
                    </div>
                </div>
                <ul style={{ display: 'flex' }}>
                    {this.renderOptions()}
                </ul>
                <div className="field is-grouped">
                    {this.state.options.length > 0 ? <FinalizeInputs onClick={this.finalizeInput} /> : null}
                    {this.state.finalized ? <WaitImNotDone onClick={this.unFinalizeInput} />
                        : null}
                </div>
            </div>
        )
    }
}

const FinalizeInputs = ({ onClick }) => (
    <div className="control">
        <button onClick={onClick} className="button is-link">
            Finished Adding Options
        </button>
    </div>
)

const WaitImNotDone = ({ onClick }) => (
    <div className="control">
        <button onClick={onClick} className="button is-danger">
            Wait Im not Done
        </button>
    </div>
)

const camelize = (string) => string.replace(/(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) =>
        index === 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, '');