import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavAnon from './nav-anon'
import NavKnown from './nav-known'


class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.loggedInUser.length == 0) {
            return (
                <NavAnon />
            )
        } else {
            return (
                <NavKnown />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(Menu)