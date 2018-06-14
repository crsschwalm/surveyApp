import React, { Component } from 'react';
import SurveyList from '../components/SurveyList';
import survey from '../../tests/exampleSurvey';


export default class OpenSurveys extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.tempProps = { surveys: [survey] };
    }

    render() {
        return (
            <section className="section">
                <div className="container section">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters is-narrow">
                            <SurveyList surveys={this.tempProps.surveys} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
