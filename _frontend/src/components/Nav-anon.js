import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavAnon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav id="nav" className="navbar navbar-default" style={{marginBottom:"30px"}}>
            <div className="container-fluid" id="nav" >
                <div className="navbar-header">
                    <a className="navbar-brand" id="title" href="#">SOLEd!</a>
                    <ul className="section-nav">
                        <Link to="/viewsoles">< li className="toc-entry toc-h2">GET SOME SOLE</li></Link>
                        <Link to="/signin">< li className="toc-entry toc-h2">SIGN IN / SIGN UP</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default NavAnon
