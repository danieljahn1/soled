import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
import { userLogOut } from '../redux/actions'

class NavKnown extends Component {
    constructor(props) {
        super(props)
    }

    logout() {
        var loggedInUserCopy = this.props.loggedInUser.slice();
        loggedInUserCopy.splice(0, 1);
        this.props.sendToRedux(loggedInUserCopy);
        this.props.history.push("/signup");
    }

    render() {
        return (
            <nav className="navbar navbar-default" style={{marginBottom:"-10px"}}>
            <div className="container-fluid" >
                <div className="navbar-header">
                    <a className="navbar-brand" id="title" href="#">SOLEd!</a>
                    </div>
                    <div className="pull-right">
                        <Link to="/viewsoles/"><button className=" btn btn-link">GET SOME SOLE</button></Link>
                        <Link to="/createsole/"><button className="btn btn-link">SELL YOUR SOLE</button></Link>
                        <Link to="/mysole/"><button className="btn btn-link">MY SOLE</button></Link>
                        <Link to="/"><button  className="btn btn-link" onClick={this.logout.bind(this)}>LOG OUT</button></Link>
                
                </div>
            </nav>
        )
    }
}

export default NavKnown
