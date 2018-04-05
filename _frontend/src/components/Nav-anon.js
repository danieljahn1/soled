import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavAnon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav id="nav" className="navbar navbar-default" style={{marginBottom:"-10px"}}>
            <div className="container-fluid" id="nav" >
                <div className="navbar-header">
                    <a className="navbar-brand" id="title" href="#">SOLEd!</a>
                    </div>
                    <div className="pull-right">
                    <Link to="/viewsoles/"><button className=" btn btn-link"> GET SOME SOLE </button></Link>
                    <Link to="/sign-in/"><button className="btn btn-link"> SIGN IN </button></Link>
                    <Link to="/sign-up/"><button className="btn btn-link"> SIGN UP </button></Link>
                   </div>
            </div>
        </nav>
        )
    }
}

export default NavAnon
