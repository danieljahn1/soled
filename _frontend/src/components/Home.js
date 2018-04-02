import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {loadOtherUsers} from '../redux/actions'


class Home extends Component {
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

export default connect(MapStateToProps,MapDispatchToProps)(Home);