import React, {Component} from 'react'
import Login from './Login'
import Logout from './Logout'
import {loginUser} from '../actions/login'
import {logoutUser} from '../actions/logout'
import PropTypes from 'prop-types'

export default class Navbar extends Component {

    render() {
        const {dispatch, isAuthenticated, errorMessage} = this.props;

        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-form'>

                        {!isAuthenticated &&
                        <Login
                            errorMessage={errorMessage}
                            onLoginClick={creds => dispatch(loginUser(creds))}
                        />
                        }

                        {isAuthenticated &&
                        <Logout onLogoutClick={() => dispatch(logoutUser())}/>
                        }

                    </div>
                </div>
            </nav>
        )
    }

}

Navbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};