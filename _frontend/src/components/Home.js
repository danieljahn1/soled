import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import axios from 'axios'
// import {loadOtherUsers} from '../redux/actions'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="container">
            List featured shoes on the home page.
        </div>
        // if (this.props.loggedInUser.length == 0) {
        //     return (
        //         <NavAnon />
        //     )
        // } else {
        //     return (
        //         <NavKnown />
        //     )
        // }

        )
        
    }
}

export default Home;