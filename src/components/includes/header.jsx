import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { SignOut } from '../../actions/auth'

import logo from '../../assets/logo.svg'
import '../../styles/header.css'

const Header = ({ SignOut }) => (
    <div className="App-header container-full">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Before you sleep</h1>

        <div className="center-text routes">
            <NavLink to="/dashboard" activeClassName="active">App</NavLink>
            <button 
                className="btn btn-outlined btn-rounded purple-btn"
                onClick={SignOut}
            >
                Logout
            </button>
        </div>
    </div>
)

const connectedHeader = (dispatch) => (
    {
        SignOut: () => dispatch(SignOut())
    }
)

export default connect(undefined, connectedHeader)(Header);