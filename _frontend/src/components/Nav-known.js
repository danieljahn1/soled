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
            <nav id="nav" className="navbar navbar-default" style={{ marginBottom: "30px" }}>
                <div className="container-fluid" id="nav" >
                    <div className="navbar-header">
                        <a className="navbar-brand" id="title" href="#">SOLEd!</a>
                        <ul className="section-nav">
                            <Link to="/viewsoles">< li className="toc-entry toc-h2">GET SOME SOLE</li></Link>
                            <Link to="/createsole">< li className="toc-entry toc-h2">SELL YOUR SOLE</li></Link>
                            <Link to="/mysole">< li className="toc-entry toc-h2">MY SOLE</li></Link>
                            < li className="toc-entry toc-h2">LOG OUT</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavKnown
