import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NavKnown from './nav-known';
import NavAnon from './nav-anon';


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInSession: '',
        }
    }

    render() {
        if (this.props.loggedInUser != '') {
            return (
                <div className="col-md-12">
                    <NavKnown />
                </div>
            )
        } else {
            return (
                <div className="col-md-12">
                    <NavAnon />
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        userInSession: state.loggedInUser
    }
}

export default connect(mapStateToProps)(NavBar)
