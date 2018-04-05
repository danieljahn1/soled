import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
        return ( 
            <nav className="navbar navbar-default">
            <div className="container-fluid" id="nav" >
                <div className="navbar-header">
                    <a className="navbar-brand" id="title" href="#">Soled</a>
                    <ul className="section-nav">
                        <li className="toc-entry toc-h2"><a href="#classes">Shoes</a></li>
                        <li className="toc-entry toc-h2"><a href="#mixins">Color</a></li>
                        <li className="toc-entry toc-h2"><a href="#responsive">Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
         )
    }
}
 
export default NavAnon;