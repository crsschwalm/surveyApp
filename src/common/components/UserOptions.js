import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = { display: "block", margin: "auto" }

const UserOptions = () => (
    <section className="section">
        <div className="columns" style={{ display: 'flex', textAlign: "center" }}>
            <div className="column">
                <Link to="/create">
                    <span className="icon is-medium" style={buttonStyle}>
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </span>
                    <p>Create A Survey</p>
                </Link>
            </div>
            <div className="column">
                <Link to="/take">
                    <span className="icon is-medium" style={buttonStyle}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </span>
                    <p>Take A Survey</p>
                </Link>
            </div>
            <div className="column">
                <Link to="/manage">
                    <span className="icon is-medium" style={buttonStyle}>
                        <i className="fa fa-edit" aria-hidden="true"></i>
                    </span>
                    <p>Manage Surveys</p>
                </Link>
            </div>
        </div>
    </section>
)

export default UserOptions