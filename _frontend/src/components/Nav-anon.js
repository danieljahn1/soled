import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAuth } from '../redux/actions'

class NavAnon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verifyEmail: '',
            verifyPassword: '',
         }
    }
    render() { 
        return (  )
    }
}
 
export default NavAnon;