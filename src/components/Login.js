import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {

    render() {
        const {errorMessage} = this.props;

        return (
            <div>
                <input type='text' ref='username' className="form-control" placeholder='Username'/>
                <input type='password' ref='password' className="form-control" placeholder='Password'/>
                <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
                    Login
                </button>

                {errorMessage &&
                <p>{errorMessage}</p>
                }
            </div>
        )
    }

    handleClick(event) {
        const username = this.refs.username;
        const password = this.refs.password;
        const creds = {username: username.value.trim(), password: password.value.trim()};
        this.props.onLoginClick(creds)
    }
};

Login.propTypes = {
    errorMessage: PropTypes.string
};