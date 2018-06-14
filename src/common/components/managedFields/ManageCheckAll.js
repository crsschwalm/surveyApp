import React, { Component } from 'react'

const Form = ({ addOption }) => {
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addOption(input.value);
            input.value = '';
        }}>
            <input className="form-control col-md-12" ref={node => {
                input = node;
            }} />
            <br />
        </form>
    );
};

const Option = ({ option, remove }) => (<a href="#" className="list-group-item">{option.text}<span onClick={() => { remove(option.id) }}>REMOVE</span></a>);

const OptionList = ({ options, remove }) => {
    const optionNode = options.map((option) => (<Option option={option} key={option.id} remove={remove} />)
    )
    return (<div className="list-group" style={{ marginTop: '30px' }}>{optionNode}</div>);
}


export default class ManageCheckAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.addOption = this.addOption.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    componentDidMount() {
        // axios.get(this.apiUrl)
        //     .then((res) => {
        //         this.setState({ data: res.data });
        //     });
    }
    addOption(val) {
        const option = { text: val }
        // axios.post(this.apiUrl, option)
        //     .then((res) => {
        //this.state.data.push(res.data);
        this.state.data.push(option);
        this.setState({ data: this.state.data });
        // });
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((option) => {
            if (option.id !== id) return option;
        });

        // axios.delete(this.apiUrl + '/' + id)
        //     .then((res) => {
        this.setState({ data: remainder });
        // })
    }

    render() {
        return (
            <div>
                <Title optionCount={this.state.data.length} />
                <Form addOption={this.addOption} />
                <OptionList
                    options={this.state.data}
                    remove={this.handleRemove}
                />
            </div>
        );
    }
}